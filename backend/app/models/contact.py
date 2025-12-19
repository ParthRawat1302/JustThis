from pydantic import BaseModel, EmailStr, Field
from datetime import datetime

class Contact(BaseModel):
    full_name: str = Field(..., example="Parth Rawat")
    email: EmailStr
    mobile: str = Field(..., example="9876543210")
    city: str = Field(..., example="Indore")
    created_at: datetime = Field(default_factory=datetime.utcnow)
