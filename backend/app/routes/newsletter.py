from fastapi import APIRouter
from app.database import db
from app.models.newsletter import Newsletter

router = APIRouter( tags=["Newsletter"])

@router.post("/")
async def subscribe(newsletter: Newsletter):
    await db.newsletter.insert_one(newsletter.dict())
    return {"message": "Subscribed successfully"}

@router.get("/")
async def get_subscribers():
    subscribers = await db.newsletter.find().to_list(100)
    for s in subscribers:
        s["_id"] = str(s["_id"])
    return subscribers
