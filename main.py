# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx  # Import the httpx library

app = FastAPI()

# Enable CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to specific origins for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock data or integrate with your actual data retrieval logic
fake_users_db = {
    "user1": {"username": "user1", "password": "password1"},
    # Add more users as needed
}

async def get_lichess_data(username: str):
    # Replace YOUR_LICHESS_API_KEY with your actual Lichess API key
    lichess_api_key = "lip_KsrPdRqyxEfZ8LgGpYUh"
    lichess_api_url = f"https://lichess.org/api/user/{chiku0018}"

    headers = {
        "Authorization": f"Bearer {lichess_api_key}",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(lichess_api_url, headers=headers)

        if response.status_code == 200:
            lichess_data = response.json()
            return lichess_data
        else:
            raise HTTPException(status_code=response.status_code, detail="Error fetching data from Lichess API")

@app.get("/lichess-data/{username}")
async def get_user_lichess_data(username: str):
    user_data = await get_lichess_data(username)
    return user_data
