# fastapi-chess/lichess_api.py
import httpx

LICHESS_API_BASE_URL = "https://lichess.org"

async def get_top_players(limit: int = 50):
    try:
        url = f"{LICHESS_API_BASE_URL}/player/top/{limit}"
        async with httpx.AsyncClient() as client:
            response = await client.get(url)
            response.raise_for_status()
            return response.json()
    except httpx.HTTPError as e:
        raise Exception(f"Error fetching top players from Lichess API: {str(e)}")
