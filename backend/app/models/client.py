from pydantic import BaseModel, Field
from typing import Optional

class Client(BaseModel):
    name: str = Field(..., example="John Doe")
    description: str = Field(..., example="Great service and support")
    designation: str = Field(..., example="CEO")
    image_url: str

class ClientResponse(Client):
    id: str
