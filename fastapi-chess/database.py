from motor.motor_asyncio import AsyncIOMotorClient
from motor.motor_asyncio import AsyncIOMotorDatabase

class Database:
    def __init__(self, database_url: str, database_name: str):
        self.client = AsyncIOMotorClient(database_url)
        self.db: AsyncIOMotorDatabase = self.client[database_name]

    async def close(self):
        self.client.close()

db_url = "mongodb://localhost:27017"
db_name = "chess_players_db"

# Create an instance of the database
database = Database(db_url, db_name)
