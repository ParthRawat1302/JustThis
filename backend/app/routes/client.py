from fastapi import APIRouter
from app.database import db
from app.models.client import Client

router = APIRouter( tags=["Clients"])

@router.post("/")
async def add_client(client: Client):
    await db.clients.insert_one(client.dict())
    return {"message": "Client added successfully"}

@router.get("/")
async def get_clients():
    clients = await db.clients.find().to_list(100)
    for c in clients:
        c["_id"] = str(c["_id"])
    return clients
