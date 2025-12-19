from pydantic import BaseModel, EmailStr, Field
from datetime import datetime

class Newsletter(BaseModel):
    email: EmailStr
    subscribed_at: datetime = Field(default_factory=datetime.utcnow)
 