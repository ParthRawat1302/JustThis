from pydantic import BaseModel
from typing import Optional

class Project(BaseModel):
    name: str
    description: str
    image_url: str
