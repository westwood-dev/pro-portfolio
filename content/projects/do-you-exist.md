---
title: Do You Exist
description: Art installation exploring the concept of existence in the digital realm.
date: 07-2023
---

### Art installation exploring the concept of existence in the digital realm

<video src="/videos/do-you-exist/000.mp4"  muted autoplay loop></video>

::Spacer

::Grid2x3

![Wide shot in situ](/images/do-you-exist/001-min.png)

![Output receipt](/images/do-you-exist/002-min.png)

![Facial recognition](/images/do-you-exist/003-min.png)

![Receipt printing](/images/do-you-exist/005-min.png)

![Printed receipt](/images/do-you-exist/006-min.png)

![ ](/images/do-you-exist/007-min.png)

::

::Spacer

This project is an exploration into data privacy and the digital footprint we leave behind. The project is designed to raise awareness about the amount of information that is available about us online and to encourage users to think about their digital footprint. The data is generated, but designed to look like it is real. It uses facial recognition to serve the same data to each user.

#### Tech stack

- Node.js server running on PC
- Python scripts for facial recognition and data generation
- Thermal printer for receipts
- Webcam for facial recognition
- iPad for touch interface
- 24 inch monitor for output

#### Software

The facial recognition uses MediaPipe and OpenCV to detect faces and compare them to a database of known faces.

The data generation is done with the python faker library.

The face images are generated using StyleGAN2 and the fingerprints are generated using a custom built GAN.

Both the iPad and screen UI are website based, using vanilla JavaScript and CSS.
