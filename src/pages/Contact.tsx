import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  Alert,
  Snackbar,
  CircularProgress,
  Link as MuiLink,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { SEO, FloatingElements } from "@/components/common";
import Scene3D from "@/components/3d/Scene";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils";
import { useInView } from "@/hooks";
import { RESTAURANT_INFO } from "@/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  position?: string;
  date?: string;
  time?: string;
  guests?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  position: "",
  date: "",
  time: "",
  guests: "",
};

const subjectOptions = [
  "General Inquiry",
  "Feedback",
  "Reservation",
  "Career",
  "Catering",
  "Events",
  "Other",
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const { ref: formRef, isInView: formInView } = useInView();
  const { ref: infoRef, isInView: infoInView } = useInView();

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);

  // Auto-select subject from URL params (e.g., /contact?subject=Reservation)
  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam && subjectOptions.includes(subjectParam)) {
      setFormData((prev) => ({ ...prev, subject: subjectParam }));
      // Scroll to form after a short delay
      setTimeout(() => {
        document
          .getElementById("contact-form")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    }
  }, [searchParams]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validatePhone = (phone: string): boolean => {
    // Canadian phone number validation
    const phoneRegex =
      /^(\+1|1)?[-.\s]?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid Canadian phone number (e.g., 905-123-4567)";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    // Career-specific validation
    if (formData.subject === "Career" && !formData.position?.trim()) {
      newErrors.position = "Position is required for career inquiries";
    }

    // Reservation-specific validation
    if (formData.subject === "Reservation") {
      if (!formData.date) {
        newErrors.date = "Date is required for reservations";
      }
      if (!formData.time) {
        newErrors.time = "Time is required for reservations";
      }
      if (!formData.guests) {
        newErrors.guests = "Number of guests is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setError("Please fix the errors in the form");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const apiEndpoint =
        import.meta.env.VITE_CONTACT_API_ENDPOINT || "/api/contact";

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData(initialFormData);
      } else {
        const data = await response.json();
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try calling us directly.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiPhone size={28} />,
      title: "Phone",
      content: RESTAURANT_INFO.phoneFormatted,
      link: `tel:${RESTAURANT_INFO.phone}`,
    },
    {
      icon: <FiMail size={28} />,
      title: "Email",
      content: RESTAURANT_INFO.email,
      link: `mailto:${RESTAURANT_INFO.email}`,
    },
    {
      icon: <FiMapPin size={28} />,
      title: "Address",
      content: RESTAURANT_INFO.address.full,
      link: RESTAURANT_INFO.address.googleMapsUrl,
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with The Rolling Barrel. Make reservations, inquire about catering, or visit us at our location. We'd love to hear from you."
      />
      <Box sx={{ overflowX: "hidden" }}>
        <Box
          sx={{
            py: { xs: 12, md: 20 },
            position: "relative",
            background: `
            radial-gradient(ellipse at 30% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 30%, rgba(255, 255, 255, 0.02) 0%, transparent 40%),
            linear-gradient(180deg, #0A0A0A 0%, #050505 100%)
          `,
            textAlign: "center",
            overflow: "hidden",
            minHeight: { xs: "auto", md: "50vh" },
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* 3D Background Scene */}
          <Scene3D variant="minimal" intensity={0.5} />
          <FloatingElements variant="light" density="sparse" />
          <Container maxWidth="md">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    letterSpacing: 4,
                    mb: 2,
                    display: "block",
                  }}
                >
                  GET IN TOUCH
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #888888 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Contact Us
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "text.secondary",
                    maxWidth: 600,
                    mx: "auto",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Have a question, reservation request, or feedback? We'd love
                  to hear from you!
                </Typography>
              </motion.div>
            </motion.div>
          </Container>
        </Box>
        {/* Contact Info Cards */}
        <Box
          ref={infoRef}
          sx={{
            py: { xs: 6, md: 8 },
            bgcolor: "background.paper",
            mt: -8,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <Grid container spacing={4}>
                {contactInfo.map((info, index) => (
                  <Grid size={{ xs: 12, md: 4 }} key={index}>
                    <motion.div
                      variants={staggerItem}
                      style={{ height: "100%" }}
                    >
                      <Card
                        component={motion.div}
                        whileHover={{ y: -8, scale: 1.02 }}
                        sx={{
                          height: "100%",
                          p: 4,
                          textAlign: "center",
                          bgcolor: "rgba(15, 15, 15, 0.95)",
                          border: "2px solid",
                          borderColor: "rgba(255, 255, 255, 0.1)",
                          borderRadius: 4,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "3px",
                            background:
                              "linear-gradient(90deg, #FFFFFF, #888888)",
                            transform: "scaleX(0)",
                            transformOrigin: "left",
                            transition: "transform 0.4s ease",
                          },
                          "&:hover": {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                            boxShadow: "0 16px 50px rgba(0, 0, 0, 0.4)",
                          },
                          "&:hover::before": {
                            transform: "scaleX(1)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 70,
                            height: 70,
                            borderRadius: "50%",
                            bgcolor: "rgba(255, 255, 255, 0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mx: "auto",
                            mb: 3,
                            color: "#FFFFFF",
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, mb: 2 }}
                        >
                          {info.title}
                        </Typography>
                        <MuiLink
                          href={info.link}
                          target={
                            info.title === "Address" ? "_blank" : undefined
                          }
                          rel={
                            info.title === "Address"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          sx={{
                            color: "text.secondary",
                            textDecoration: "none",
                            "&:hover": {
                              color: "primary.main",
                            },
                          }}
                        >
                          {info.content}
                        </MuiLink>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>
        {/* Contact Form */}
        <Box
          id="contact-form"
          sx={{
            py: { xs: 8, md: 12 },
            background:
              "linear-gradient(180deg, #0A0A0A 0%, #050505 50%, #0A0A0A 100%)",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)",
              pointerEvents: "none",
            },
          }}
        >
          <Container maxWidth="md">
            <motion.div
              ref={formRef}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h2"
                    sx={{
                      mb: 2,
                      background:
                        "linear-gradient(135deg, #FFFFFF 0%, #888888 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Send Us a Message
                  </Typography>
                </motion.div>
              </Box>

              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: 4,
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    bgcolor: "rgba(15, 15, 15, 0.95)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background:
                        "linear-gradient(90deg, #FFFFFF, #888888, #FFFFFF)",
                    },
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          error={!!errors.name}
                          helperText={errors.name}
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          helperText={errors.email}
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          error={!!errors.phone}
                          helperText={errors.phone}
                          placeholder="905-123-4567"
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth error={!!errors.subject}>
                          <InputLabel>Subject *</InputLabel>
                          <Select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            label="Subject *"
                            required
                          >
                            {subjectOptions.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </Select>
                          {errors.subject && (
                            <Typography
                              variant="caption"
                              color="error"
                              sx={{ mt: 0.5, ml: 2 }}
                            >
                              {errors.subject}
                            </Typography>
                          )}
                        </FormControl>
                      </Grid>

                      {/* Career-specific fields */}
                      {formData.subject === "Career" && (
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label="Position Applying For"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            error={!!errors.position}
                            helperText={
                              errors.position
                            }
                            required
                          />
                        </Grid>
                      )}

                      {/* Reservation-specific fields */}
                      {formData.subject === "Reservation" && (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Grid size={{ xs: 12, sm: 4 }}>
                            <DatePicker
                              label="Date *"
                              value={selectedDate}
                              onChange={(newValue) => {
                                setSelectedDate(newValue);
                                setFormData({
                                  ...formData,
                                  date: newValue
                                    ? newValue.format("YYYY-MM-DD")
                                    : "",
                                });
                                if (errors.date) {
                                  setErrors({ ...errors, date: undefined });
                                }
                              }}
                              minDate={dayjs()}
                              slotProps={{
                                textField: {
                                  fullWidth: true,
                                  error: !!errors.date,
                                  helperText: errors.date,
                                  required: true,
                                  sx: {
                                    '& .MuiOutlinedInput-root': {
                                      borderRadius: 4,
                                      backgroundColor: 'rgba(255,255,255,0.03)',
                                      '& fieldset': {
                                        borderColor: 'rgba(255,255,255,0.12)'
                                      },
                                      '&:hover fieldset': {
                                        borderColor: 'rgba(255,255,255,0.2)'
                                      },
                                      '&.Mui-focused fieldset': {
                                        borderColor: 'rgba(255,255,255,0.5)',
                                        borderWidth: '2px'
                                      }
                                    },
                                    '& .MuiInputLabel-root': {
                                      color: 'rgba(255,255,255,0.6)'
                                    },
                                    '& .MuiFormHelperText-root': {
                                      color: 'rgba(255,255,255,0.5)'
                                    }
                                  }
                                },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, sm: 4 }}>
                            <TimePicker
                              label="Time *"
                              value={selectedTime}
                              onChange={(newValue) => {
                                setSelectedTime(newValue);
                                setFormData({
                                  ...formData,
                                  time: newValue
                                    ? newValue.format("HH:mm")
                                    : "",
                                });
                                if (errors.time) {
                                  setErrors({ ...errors, time: undefined });
                                }
                              }}
                              slotProps={{
                                textField: {
                                  fullWidth: true,
                                  error: !!errors.time,
                                  helperText: errors.time,
                                  required: true,
                                  sx: {
                                    '& .MuiOutlinedInput-root': {
                                      borderRadius: 4,
                                      backgroundColor: 'rgba(255,255,255,0.03)',
                                      '& fieldset': {
                                        borderColor: 'rgba(255,255,255,0.12)'
                                      },
                                      '&:hover fieldset': {
                                        borderColor: 'rgba(255,255,255,0.2)'
                                      },
                                      '&.Mui-focused fieldset': {
                                        borderColor: 'rgba(255,255,255,0.5)',
                                        borderWidth: '2px'
                                      }
                                    },
                                    '& .MuiInputLabel-root': {
                                      color: 'rgba(255,255,255,0.6)'
                                    },
                                    '& .MuiFormHelperText-root': {
                                      color: 'rgba(255,255,255,0.5)'
                                    }
                                  }
                                },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, sm: 4 }}>
                            <TextField
                              fullWidth
                              label="Number of Guests"
                              name="guests"
                              type="number"
                              value={formData.guests}
                              onChange={handleChange}
                              error={!!errors.guests}
                              helperText={errors.guests}
                              inputProps={{ min: 1 }}
                              required
                            />
                          </Grid>
                        </LocalizationProvider>
                      )}

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Your Message"
                          name="message"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          error={!!errors.message}
                          helperText={errors.message}
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          disabled={loading}
                          startIcon={
                            loading ? (
                              <CircularProgress size={20} color="inherit" />
                            ) : (
                              <FiSend />
                            )
                          }
                          sx={{
                            py: 1.75,
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            textTransform: "none",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {loading ? "Sending..." : "Send Message"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Card>
              </motion.div>
            </motion.div>
          </Container>
        </Box>
        {/* Map Section */}
        <Box
          sx={{
            height: { xs: 350, md: 450 },
            width: "100%",
            position: "relative",
            padding: "10px",
          }}
        >
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.885!2d-78.8796!3d43.9254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s462+Taunton+Rd+W%2C+Oshawa%2C+ON+L1L+0W1%2C+Canada!5e0!3m2!1sen!2sca!4v1701500000000!5m2!1sen!2sca"
            title="Restaurant Location"
            sx={{
              width: "100%",
              height: "100%",
              border: 0,
            }}
            // @ts-ignore - MUI Box doesn't type iframe props
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
        {/* Success/Error Snackbar */}
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSuccess(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Thank you! Your message has been sent successfully. We'll get back
            to you soon!
          </Alert>
        </Snackbar>
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setError("")}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setError("")}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Contact;
