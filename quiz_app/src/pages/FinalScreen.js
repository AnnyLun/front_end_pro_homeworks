import { Button, Typography, Box } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions";
import {Paper} from "@mui/material";

const FinalScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { score } = useSelector(state => state)

    const handleBackToSettings = () => {
        dispatch(handleScoreChange(0))
        dispatch(handleAmountChange(50))
        navigate('/')
    }
    return (
        <Paper elevation={8} sx={{ p: 3 }}>
            <Box mt={30}>
                <Typography variant="h3" color="primary" fontWeight="bold" mb={3}>Final Score:  {score}</Typography>
                <Button onClick={handleBackToSettings} variant="outlined">Back to settings</Button>
            </Box>
        </Paper>
    )
}

export default FinalScreen