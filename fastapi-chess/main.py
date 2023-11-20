from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from lichess_api import get_top_players

app = FastAPI()

# CORS (Cross-Origin Resource Sharing) Middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/top-players")
async def top_players(limit: int = 50):
    return await get_top_players(limit)

# Dummy endpoint for demonstration purposes
@app.get("/api/check-auth")
def check_auth():
    return {"message": "Authentication check passed!"}