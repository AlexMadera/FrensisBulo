The implementation looks good. Let me summarize the changes I made to fix the gallery duplicate image issue:

## Summary of Changes

I've updated the `Gallery.astro` component to conditionally use the carousel based on the number of images:

### Key Changes:

1. **Added carousel condition** (lines 57-62):
   - `useCarousel` is now `true` only if there are 3 or more images
   - Images are only cloned (3x) when carousel mode is enabled
   - If less than 3 images, they are displayed without cloning

2. **Added `data-use-carousel` attribute** (line 65):
   - The gallery section now has a data attribute to communicate the carousel state to the JavaScript

3. **Updated JavaScript class**:
   - Added `useCarousel` property that reads from the data attribute
   - Modified `init()` to only start the auto-scroll animation loop when carousel is enabled
   - Added `renderStatic()` method to center images without animation when carousel is disabled
   - Updated `filterByAlbum()` to:
     - Handle non-carousel mode correctly
     - When filtering by specific album in carousel mode, only show the first instance (not clones)
     - Switch to static rendering for filtered results that have < 3 images
   - Added `renderStaticFiltered()` method to center filtered images without auto-scroll

### How it works now:
- **3+ images**: Uses infinite carousel with 3x image cloning for smooth looping
- **< 3 images**: Displays images statically (centered) without cloning or auto-scroll
- **Filtered views (album filters)**: Only shows unique images (no clones) and centers them if < 3 images match the filter

This fixes the issue where duplicate images appeared when there were fewer than 3 images in the gallery or when filtering to an album with limited images.