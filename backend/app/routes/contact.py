from fastapi import APIRouter
from app.database import db
from app.models.contact import Contact

router = APIRouter( tags=["Contact"])

@router.post("/")
async def submit_contact(contact: Contact):
    await db.contacts.insert_one(contact.dict())
    return {"message": "Contact form submitted"}

@router.get("/")
async def get_contacts():
    contacts = await db.contacts.find().to_list(100)
    for c in contacts:
        c["_id"] = str(c["_id"])
    return contacts
