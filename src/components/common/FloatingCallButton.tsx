import { Box, IconButton, Tooltip, Zoom } from '@mui/material';
import { Phone } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { RESTAURANT_INFO } from '@/constants';

const FloatingCallButton = () => {
  return (
    <Tooltip
      title={`Call us: ${RESTAURANT_INFO.phoneFormatted}`}
      placement="left"
      TransitionComponent={Zoom}
      arrow
    >
      <Box
        component={motion.div}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        sx={{
          position: 'fixed',
          bottom: { xs: 24, md: 32 },
          right: { xs: 24, md: 32 },
          zIndex: 1000
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 4px 20px rgba(139, 38, 53, 0.3)',
              '0 8px 40px rgba(139, 38, 53, 0.5)',
              '0 4px 20px rgba(139, 38, 53, 0.3)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{ borderRadius: '50%' }}
        >
          <IconButton
            component="a"
            href={`tel:${RESTAURANT_INFO.phone}`}
            aria-label="Call us"
            sx={{
              width: { xs: 56, md: 64 },
              height: { xs: 56, md: 64 },
              bgcolor: 'primary.main',
              color: 'white',
              boxShadow: '0 4px 20px rgba(139, 38, 53, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'scale(1.1)',
                boxShadow: '0 8px 30px rgba(139, 38, 53, 0.5)'
              },
              '&:active': {
                transform: 'scale(0.95)'
              }
            }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <Phone sx={{ fontSize: { xs: 28, md: 32 } }} />
            </motion.div>
          </IconButton>
        </motion.div>
      </Box>
    </Tooltip>
  );
};

export default FloatingCallButton;
