## Note:
This is still very much in progress... Currently only three Yoruba sounds (voices) are in use. The plans is to add more voices, more voiceless tones (see explanation below) and maybe more languages? Is that a question? &#128517; Am I using emojis in a markdown? &#129318;


# Tonal Lang

## Overview
Many languages are tonal. One of them, Yoruba, has words like og&uacute;n (<i>twenty</i>), ogun (<i>war</i>), &ograve;g&uacute;n (<i>god of iron</i>) which may have the same spelling but do not sound the same to native speakers (homographs). This app aims to help users hear the tones through repitition and quiz themselves on demand.

## Technologies

### Praat https://www.fon.hum.uva.nl/praat/
Pitch from a tonal language tends not to be a single frequency like say, middle C at 256 Hz. Instead it's a contour or curve. See the images below.
<br><br>With Praat we can extract the pitch contours from a sound recording and apply that pitch curve to a sine wave. And maybe create a voiceless language tone. At least that's the plan.
<br>
<br>
![alt text](https://www.frontiersin.org/files/Articles/292119/fpsyg-08-02139-HTML/image_m/fpsyg-08-02139-g001.jpg)
<b>Source</b>: [Shang N and Styles SJ (2017) Is a High Tone Pointy? Speakers of Different Languages Match Mandarin Chinese Tones to Visual Shapes Differently. Front. Psychol. 8:2139. doi: 10.3389/fpsyg.2017.02139](https://www.frontiersin.org/articles/10.3389/fpsyg.2017.02139/full)
<br>
<br>
![](https://sail.usc.edu/~lgoldste/General_Phonetics/Tone/yoruba1.jpg)
<br><b>Source</b>: [Yoruba Pitch Contour | USC General Phonetics | Hombert, 1976](https://sail.usc.edu/~lgoldste/General_Phonetics/Tone/)

### Audacity https://www.audacityteam.org
With Audacity we can modulate the sine wave created with Praat. These changes in frequencies should help simulate the differences in pitches from person to person. For example, the tonal register of a woman would generally be higher than that of a man. Yet a native speaker would still be able to recognize the tones despite the difference in pitch. Providing a user of this app with 



