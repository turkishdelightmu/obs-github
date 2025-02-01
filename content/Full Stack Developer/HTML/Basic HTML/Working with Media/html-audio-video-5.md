# What Are the Roles of the HTML Audio and Video Elements, and How Do They Work?

### The Role of HTML `<audio>` and `<video>` Elements  

The `<audio>` and `<video>` elements allow you to integrate sound and video content into your HTML documents, enhancing the multimedia experience of your website.  

#### Supported Formats  

- **Audio**: Common formats include **MP3**, **WAV**, and **OGG**.  
- **Video**: Popular formats include **MP4**, **Ogg**, and **WebM**.  

### Using the `<audio>` Element  

To include audio content, use the `<audio>` element with the `src` attribute pointing to the audio file's location. For example:  

```html
<audio src="audio-file.mp3"></audio>
```  

By default, this will add the `<audio>` element to the page, but it won't display any controls for playback.  

#### Displaying Playback Controls  

To show a built-in audio player, add the `controls` attribute to the `<audio>` element:  

```html
<audio src="audio-file.mp3" controls></audio>
```  

The `controls` attribute allows users to play, pause, adjust volume, and seek within the audio. This is a **Boolean attribute**, so including it automatically enables the playback controls.  

#### Additional Attributes for `<audio>`  

1. **`loop`**: Replays the audio continuously.  
   ```html
   <audio src="song.mp3" controls loop></audio>
   ```  

2. **`muted`**: Starts the audio in a muted state.  
   ```html
   <audio src="song.mp3" controls muted></audio>
   ```  

3. **`<source>` Elements**: Provide multiple audio formats for better browser compatibility. The browser selects the first supported format.  
   ```html
   <audio controls>
       <source src="audio-file.ogg" type="audio/ogg">
       <source src="audio-file.mp3" type="audio/mpeg">
       Your browser does not support the audio element.
   </audio>
   ```  

### Using the `<video>` Element  

The `<video>` element works similarly to `<audio>` but is tailored for video content. For example:  

```html
<video src="video-file.mp4" controls></video>
```  

#### Enhancements for `<video>`  

1. **`poster`**: Displays an image while the video loads. This attribute is unique to the `<video>` element.  
   ```html
   <video src="video-file.mp4" controls poster="poster-image.jpg"></video>
   ```  

2. **`width`**: Specifies the width of the video player in pixels.  
   ```html
   <video src="video-file.mp4" controls width="620"></video>
   ```  

3. **Combining Attributes**:  
   ```html
   <video src="video-file.mp4" controls loop muted poster="poster-image.jpg" width="620"></video>
   ```  

### Example: Comprehensive Use of `<audio>` and `<video>`  

#### Audio Example:  
```html
<audio controls loop muted>
   <source src="audio-file.ogg" type="audio/ogg">
   <source src="audio-file.mp3" type="audio/mpeg">
   Your browser does not support the audio element.
</audio>
```  

#### Video Example:  
```html
<video controls loop muted poster="poster-image.jpg" width="620">
   <source src="video-file.webm" type="video/webm">
   <source src="video-file.mp4" type="video/mp4">
   Your browser does not support the video element.
</video>
```  

### Summary  

The `<audio>` and `<video>` elements bring multimedia to your website, supporting various attributes like `controls`, `loop`, and `muted`. For videos, additional features like `poster` and `width` make them even more versatile. Always consider browser compatibility by including multiple formats with `<source>` elements to ensure a seamless user experience.  