#!/usr/bin/env python3

import os
from PIL import Image, ImageDraw, ImageFont
import math

# Notable brand colors
PRIMARY_COLOR = "#3B82F6"  # Blue
SECONDARY_COLOR = "#1E40AF"  # Darker blue
BACKGROUND_COLOR = "#FFFFFF"  # White
ACCENT_COLOR = "#EFF6FF"  # Light blue

def create_icon_base(size):
    """Create the base icon with rounded corners"""
    # Create a new image with white background
    img = Image.new('RGBA', (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw rounded rectangle background
    corner_radius = size // 8
    draw.rounded_rectangle(
        [(0, 0), (size-1, size-1)],
        radius=corner_radius,
        fill=BACKGROUND_COLOR,
        outline=None
    )
    
    return img, draw

def draw_notable_logo(draw, size):
    """Draw the Notable 'N' logo with modern design"""
    padding = size // 4
    line_width = max(size // 12, 4)
    
    # Define points for stylized 'N' with a notebook metaphor
    left_x = padding
    right_x = size - padding
    top_y = padding
    bottom_y = size - padding
    
    # Draw the 'N' shape with notebook lines
    # Left vertical line
    draw.line(
        [(left_x, top_y), (left_x, bottom_y)],
        fill=PRIMARY_COLOR,
        width=line_width
    )
    
    # Diagonal line
    draw.line(
        [(left_x, bottom_y), (right_x, top_y)],
        fill=PRIMARY_COLOR,
        width=line_width
    )
    
    # Right vertical line
    draw.line(
        [(right_x, top_y), (right_x, bottom_y)],
        fill=PRIMARY_COLOR,
        width=line_width
    )
    
    # Add subtle notebook lines
    line_spacing = size // 8
    line_alpha = 40
    for i in range(3):
        y = top_y + (i + 1) * line_spacing
        if y < bottom_y - line_spacing:
            draw.line(
                [(left_x + line_width, y), (right_x - line_width, y)],
                fill=(*tuple(int(PRIMARY_COLOR[i:i+2], 16) for i in (1, 3, 5)), line_alpha),
                width=max(1, line_width // 4)
            )
    
    # Add a subtle accent dot (representing a bullet point)
    dot_size = line_width
    dot_x = left_x - dot_size * 2
    dot_y = top_y + line_spacing
    if dot_x > padding // 2:
        draw.ellipse(
            [(dot_x - dot_size//2, dot_y - dot_size//2),
             (dot_x + dot_size//2, dot_y + dot_size//2)],
            fill=SECONDARY_COLOR
        )

def generate_icon(size, output_path):
    """Generate a single icon of specified size"""
    img, draw = create_icon_base(size)
    draw_notable_logo(draw, size)
    
    # Save the icon
    img.save(output_path, 'PNG')
    print(f"Generated: {output_path}")

def generate_favicon(sizes, output_dir):
    """Generate multi-size favicon.ico"""
    images = []
    for size in sizes:
        img, draw = create_icon_base(size)
        draw_notable_logo(draw, size)
        images.append(img)
    
    # Save as ICO with multiple sizes
    output_path = os.path.join(output_dir, 'favicon.ico')
    images[0].save(output_path, 'ICO', sizes=[(img.width, img.height) for img in images])
    print(f"Generated: {output_path}")

def main():
    base_dir = "/Users/ryota.murakami/repository/Notable/assets/icons"
    
    # Web favicons
    web_sizes = {
        'favicon-16x16.png': 16,
        'favicon-32x32.png': 32,
        'favicon-96x96.png': 96,
        'favicon-192x192.png': 192,
        'favicon-512x512.png': 512,
    }
    
    # Electron icons
    electron_sizes = {
        'icon.png': 512,
        'icon@2x.png': 1024,
        'icon.icns': 1024,  # Will be converted later
        'icon.ico': 256,    # Windows icon
    }
    
    # iOS icons
    ios_sizes = {
        'icon-20.png': 20,
        'icon-20@2x.png': 40,
        'icon-20@3x.png': 60,
        'icon-29.png': 29,
        'icon-29@2x.png': 58,
        'icon-29@3x.png': 87,
        'icon-40.png': 40,
        'icon-40@2x.png': 80,
        'icon-40@3x.png': 120,
        'icon-60@2x.png': 120,
        'icon-60@3x.png': 180,
        'icon-76.png': 76,
        'icon-76@2x.png': 152,
        'icon-83.5@2x.png': 167,
        'icon-1024.png': 1024,
    }
    
    # Android icons
    android_sizes = {
        'mipmap-mdpi/ic_launcher.png': 48,
        'mipmap-hdpi/ic_launcher.png': 72,
        'mipmap-xhdpi/ic_launcher.png': 96,
        'mipmap-xxhdpi/ic_launcher.png': 144,
        'mipmap-xxxhdpi/ic_launcher.png': 192,
        'playstore-icon.png': 512,
    }
    
    # Generate web icons
    print("Generating web icons...")
    for filename, size in web_sizes.items():
        output_path = os.path.join(base_dir, 'web', filename)
        generate_icon(size, output_path)
    
    # Generate favicon.ico with multiple sizes
    generate_favicon([16, 32, 48], os.path.join(base_dir, 'web'))
    
    # Generate Electron icons
    print("\nGenerating Electron icons...")
    for filename, size in electron_sizes.items():
        if filename.endswith('.ico'):
            generate_favicon([16, 32, 48, 64, 128, 256], os.path.join(base_dir, 'electron'))
        elif filename.endswith('.icns'):
            # For now, generate PNG and note that it needs conversion
            output_path = os.path.join(base_dir, 'electron', 'icon-1024.png')
            generate_icon(size, output_path)
            print(f"Note: Convert {output_path} to .icns format for macOS")
        else:
            output_path = os.path.join(base_dir, 'electron', filename)
            generate_icon(size, output_path)
    
    # Generate iOS icons
    print("\nGenerating iOS icons...")
    for filename, size in ios_sizes.items():
        output_path = os.path.join(base_dir, 'mobile/ios', filename)
        generate_icon(size, output_path)
    
    # Generate Android icons
    print("\nGenerating Android icons...")
    for filename, size in android_sizes.items():
        output_path = os.path.join(base_dir, 'mobile/android', filename)
        # Create subdirectory if needed
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        generate_icon(size, output_path)
    
    print("\nIcon generation complete!")
    print("\nNext steps:")
    print("1. Convert electron/icon-1024.png to .icns format for macOS")
    print("2. Update app configuration files to use the new icons")
    print("3. Test icons on each platform")

if __name__ == "__main__":
    main()