## Download and Installation
&emsp;&emsp;The first step is to download the [Unity Hub](https://unity.com/download), which seems to be a platform for managing all the Unity projects. From there, I had to make an account and download the Unity Editor, which seems to be the IDE for Unity. The installation procedure was relatively smooth.

## Starting a Tutorial
&emsp;&emsp;I followed the official tutorial [Unity Essentials](https://learn.unity.com/pathway/unity-essentials) from the Unity website to learn how to use the editor.

&emsp;&emsp;Each game consists of one or more scenes. The first cool thing I learned from navigating scenes is that, at least in 3D mode, you can fly around in first person using the [flythrough mode](https://learn.unity.com/tutorial/explore-the-unity-editor-1#6273f00fedbc2a7f158cc1f1). Although it is no surprise that this feature exists, I really liked that it is an essential part of the editor, and you don't need to activate a specific mode to do this. Holding the secondary mouse button is all it takes. Unfortunately, some of the other navigation tools doesn't seem to have an instruction for Linux. Before I find out how they work in Linux, it seems that I can still get around it by just using the flythrough mode. 

&emsp;&emsp;The two objects that come with the scene by default are the lightsource and the camera, which shows how important these are. The editor comes with tools to [transform the objects](https://learn.unity.com/tutorial/explore-the-unity-editor-1#6124ecdcedbc2a54df07500f). Of course, there is also a panel to set numeric values for the positional parameters. I thought the height of the object would be denoted by the z value, but it was actually denoted by the y value.

&emsp;&emsp;There are options to pulish a project on various different platforms, and the one used in the tutorial is WebGL. Unfortunately, each project needs a web server and can't be run by opening the `index.html` file directly, which makes it a little bit more complicated to embed a project on a website. It seems like uploading to Unity Play and linking to it is a good option to share the project.

## Explore Unity

&emsp;&emsp;The next tutorial I did was the Explore Unity mission from Unity Essentials. It covered many topics including real-time creation in 2D and 3D.

### Real-time 3D

&emsp;&emsp;I was introduced to the Inspector window for the GameObject properties in this section, even though I was already using it earlier because I liked positioning objects using numerical calues better than just dragging them. One strategy I used was dragging objects to the approximate place I want them, and then align them properly using numerical values. 

&emsp;&emsp;A cool thing I learned in this section was that when an object has a child object, the position of the child object is set relative to the parent object, so it will always transform with the parent component in a predicatable way.

&emsp;&emsp;Following this part of the tutorial, I created the following with what I learned so far:

![Stairs and Plinth](/unity/stairs_and_plinth.png)