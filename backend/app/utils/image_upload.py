import cloudinary
import cloudinary.uploader
from app.config import settings

cloudinary.config(
    cloud_name=settings.CLOUDINARY_CLOUD_NAME,
    api_key=settings.CLOUDINARY_API_KEY,
    api_secret=settings.CLOUDINARY_API_SECRET
)

async def upload_image(file):
    result = cloudinary.uploader.upload(
        file,
        folder="flipr",
        transformation=[
            {"width": 450, "height": 350, "crop": "fill"}
        ]
    )
    return result["secure_url"]
