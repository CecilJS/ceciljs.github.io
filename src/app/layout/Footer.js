import React  from 'react'
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'background.default', // Adapts to theme mode
                color: 'text.primary',
                py: 6,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
                    {/* Logo or Brand */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Fun Fact
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Currently, I work as a Senior Software Engineer with other very talented engineers at Ford.
                            Who knows where I'll be working next? &#x1F609;
                        </Typography>
                    </Grid>

                    {/* Navigation Links */}
                    <Grid item xs={6} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box>
                            <Link href="/" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                                Home
                            </Link>
                            <Link href="/about" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                                About
                            </Link>
                            <Link href="/contact" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                                Contact
                            </Link>
                        </Box>
                    </Grid>

                    {/* Social Links */}
                    <Grid item xs={6} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Connect with me
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <IconButton
                                href="https://github.com/CecilJS"
                                target="_blank"
                                rel="noopener"
                                color="inherit"
                            >
                                <GitHub />
                            </IconButton>
                            <IconButton
                                href="https://www.linkedin.com/in/ceciljs/"
                                target="_blank"
                                rel="noopener"
                                color="inherit"
                            >
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom Bar */}
                <Box
                    mt={4}
                    textAlign="center"
                    sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 2 }}
                >
                    <Typography variant="body2" color="text.secondary">
                        &copy; {new Date().getFullYear()} - Built with ❤️ by Cecil Jones. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;