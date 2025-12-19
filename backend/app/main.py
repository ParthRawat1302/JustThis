from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import project, client, contact, newsletter
from app.config import settings

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(project.router, prefix="/projects")
app.include_router(client.router, prefix="/clients")
app.include_router(contact.router, prefix="/contact")
app.include_router(newsletter.router, prefix="/newsletter")

@app.get("/")
async def root():
    return {"message": "Welcome to the Just-This API!"}