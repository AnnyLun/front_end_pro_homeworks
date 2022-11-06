import { Button, Typography, Box, CircularProgress, Paper } from "@mui/material";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Settings = () => {

    const { response, error, loading } = useAxios({ url: "/api_category.php" });
   const navigate = useNavigate()
    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    if (error) {
        return (
            <Typography variant="h6" mt={20} color="red">
                Some went wrong!
            </Typography>
        )
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" }
    ]

    const typeOptions = [
        { id: "multiple", name: "Multiple Choise" },
        { id: "boolean", name: "True or Faulse only" },
    ]

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/questions')
    }
    return (     
        <Paper elevation={8} sx={{ p: 3 }}>
            <form onSubmit={handleSubmit}>
            <Typography variant="h3" color="primary" fontWeight="bold">Quiz App</Typography>
            <SelectField option={response.trivia_categories} label="Category"  />
            <SelectField option={difficultyOptions} label="Difficulty" />
            <SelectField option={typeOptions} label="Type" textColor="white"/>
            <TextFieldComp />
            <Box mt={3} width="100%">
                <Button fullWidth variant="contained" type="submit">
                    Get Started
                </Button>
            </Box>
        </form>
        </Paper>
        
    )
}

export default Settings

