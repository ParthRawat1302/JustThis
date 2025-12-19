from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # --- App ---
    SECRET_KEY: str

    # --- Database ---
    MONGO_URI: str
    DATABASE_NAME: str

    # --- CORS ---
    CORS_ORIGINS: List[str]

    # --- Cloudinary ---
    CLOUDINARY_CLOUD_NAME: str
    CLOUDINARY_API_KEY: str
    CLOUDINARY_API_SECRET: str

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="forbid"
    )


settings = Settings()
