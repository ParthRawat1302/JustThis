from fastapi import APIRouter
from app.database import db
from app.models.project import Project

router = APIRouter( tags=["Projects"])

@router.post("/")
async def create_project(project: Project):
    await db.projects.insert_one(project.dict())
    return {"message": "Project added"}

@router.get("/")
async def get_projects():
    projects = await db.projects.find().to_list(100)
    for p in projects:
        p["_id"] = str(p["_id"])
    return projects
