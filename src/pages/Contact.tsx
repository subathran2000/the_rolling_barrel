import { useState } from 'react';
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
  const { ref: formRef, isInView: formInView } = useInView();
  const { ref: infoRef, isInView: infoInView } = useInView();

  const [formData, setFormData] = useState<FormData>(initialFormData);
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
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
    } catch (err) {
      setError("An error occurred. Please try calling us directly.");
      console.error("Contact form error:", err);
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
      content: "info@therollingbarrel.ca",
      link: "mailto:info@therollingbarrel.ca",
    },
    {
      icon: <FiMapPin size={28} />,
      title: "Address",
      content: RESTAURANT_INFO.address.full,
      link: RESTAURANT_INFO.address.googleMapsUrl,
    },
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 12, md: 20 },
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(139, 38, 53, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 30%, rgba(212, 165, 116, 0.1) 0%, transparent 40%),
            linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 100%)
          `,
          textAlign: "center",
        }}
      >
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
                    "linear-gradient(135deg, #8B2635 0%, #5D1A23 50%, #D4A574 100%)",
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
                Have a question, reservation request, or feedback? We'd love to
                hear from you!
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
                  <motion.div variants={staggerItem} style={{ height: "100%" }}>
                    <Card
                      component={motion.div}
                      whileHover={{ y: -8, scale: 1.02 }}
                      sx={{
                        height: "100%",
                        p: 4,
                        textAlign: "center",
                        bgcolor: "background.paper",
                        border: "2px solid",
                        borderColor: "divider",
                        borderRadius: 1,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "primary.main",
                          boxShadow: "0 12px 40px rgba(139, 38, 53, 0.15)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: "50%",
                          bgcolor: "rgba(139, 38, 53, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 3,
                          color: "primary.main",
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        {info.title}
                      </Typography>
                      <MuiLink
                        href={info.link}
                        target={info.title === "Address" ? "_blank" : undefined}
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
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFF9F5" }}>
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
                      "linear-gradient(135deg, #8B2635 0%, #D4A574 100%)",
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
                  borderRadius: 1,
                  boxShadow: "0 8px 32px rgba(139, 38, 53, 0.12)",
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
                        helperText={
                          errors.phone || "Canadian format: 905-123-4567"
                        }
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
                            errors.position || "e.g., Server, Chef, Manager"
                          }
                          required
                        />
                      </Grid>
                    )}

                    {/* Reservation-specific fields */}
                    {formData.subject === "Reservation" && (
                      <>
                        <Grid size={{ xs: 12, sm: 4 }}>
                          <TextField
                            fullWidth
                            label="Date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            error={!!errors.date}
                            helperText={errors.date}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                              min: new Date().toISOString().split("T")[0],
                              style: { colorScheme: "light" },
                            }}
                            sx={{
                              '& input[type="date"]::-webkit-calendar-picker-indicator':
                                {
                                  filter:
                                    "invert(26%) sepia(89%) saturate(1583%) hue-rotate(333deg) brightness(85%) contrast(93%)",
                                  cursor: "pointer",
                                },
                              "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": {
                                  borderColor: "primary.main",
                                },
                              },
                            }}
                            required
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                          <TextField
                            fullWidth
                            label="Time"
                            name="time"
                            type="time"
                            value={formData.time}
                            onChange={handleChange}
                            error={!!errors.time}
                            helperText={errors.time}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                              style: { colorScheme: "light" },
                            }}
                            sx={{
                              '& input[type="time"]::-webkit-calendar-picker-indicator':
                                {
                                  filter:
                                    "invert(26%) sepia(89%) saturate(1583%) hue-rotate(333deg) brightness(85%) contrast(93%)",
                                  cursor: "pointer",
                                },
                              "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": {
                                  borderColor: "primary.main",
                                },
                              },
                            }}
                            required
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
                            inputProps={{ min: 1, max: 20 }}
                            required
                          />
                        </Grid>
                      </>
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
                          loading ? <CircularProgress size={20} /> : <FiSend />
                        }
                        sx={{
                          py: 1.5,
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          borderRadius: 1,
                          textTransform: "none",
                          background:
                            "linear-gradient(135deg, #8B2635 0%, #5D1A23 100%)",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #5D1A23 0%, #8B2635 100%)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 20px rgba(139, 38, 53, 0.3)",
                          },
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.8848839476366!2d-78.87738242346191!3d43.92543673469392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d0c6c4f6c7b%3A0x7a6f4c5b6c7c8d9e!2s462%20Taunton%20Rd%20W%2C%20Oshawa%2C%20ON%20L1L%200W1!5e0!3m2!1sen!2sca!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Location"
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
          Thank you! Your message has been sent successfully. We'll get back to
          you soon!
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
  );
};

export default Contact;
