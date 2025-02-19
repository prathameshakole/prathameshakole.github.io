import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent, Container, Button, Fade } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Footer from "../Footer";
import Loader from "react-loaders";
import fencingvideo from "../../assets/videos/fencingvideo2.mp4";

const Life = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const authorized = localStorage.getItem("lifeAuthorized");
        if (authorized) {
            setIsAuthorized(true);
            setTimeout(() => setShowContent(true), 4000);
        } else {
            navigate("/");
        }
    }, [navigate]);

    useEffect(() => {
        return () => {
            sessionStorage.removeItem("lifeAuthorized");
        };
    }, []);

    if (!isAuthorized) {
        return null;
    }

    return (
        <>
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden",
                    zIndex: -1,
                }}
            >
                <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                    <source src={fencingvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.6)",
                    }}
                />
            </Box>

            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    color: "white",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 2,
                }}
            >

                <Typography variant="h2" sx={{ fontWeight: "bold", mb: 4, fontFamily: "Coolvetica" }}>
                    <TypeAnimation
                        sequence={["En Garde.", 1000, "Prêt.", 1000, "Allez!", 1500]}
                        wrapper="span"
                        cursor
                        repeat={Infinity}
                        speed={60}
                    />
                </Typography>


                <Fade in={showContent} timeout={2000}>
                    <Box sx={{ maxWidth: "800px" }}>
                        <Card
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(8px)",
                                borderRadius: "12px",
                                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                color: "white",
                                textAlign: "left",
                                p: 2,
                                mt: 3,
                            }}
                        >
                            <CardContent>
                                <Typography variant="h4">That's Me</Typography>
                                <Typography variant="h6">
                                    playing fencing, and I might be around 12 years old.
                                    It's funny that it's the only shred of evidence of me ever having played that sport.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Fade>
            </Container>

            <Loader type="pacman" />
            <Footer />
        </>
    );
};

export default Life;
