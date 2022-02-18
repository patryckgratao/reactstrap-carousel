<h1 align="center">
    Reactstrap Custom Carousel
</h1>

## :rocket: Overview

This library, originating from [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page), is used to create custom sliders and carousels using bootstrap.

It was created for use in VTEX stores that do not support more complex libraries.

## :computer: How To Use

```npm install reactstrap-custom-carousel```

Or

```yarn add reactstrap-custom-carousel```


## Exemple

    <SliderContainer
          items={[
            {
              key: 1,
              image: {
                src: "https://picsum.photos/id/456/1200/600",
                height: "500px"
              }
            },
            {
              key: 2,
              image: {
                altText: "text lorem ipsum",
                src: "https://picsum.photos/id/678/1200/600",
                isLinkable: false,
                link: "https://picsum.photos/id/678/1200/600",
                height: "500px"
              },
              buttons: [
                {
                  positionX: "300px",
                  positionY: "30px",
                  backgroundColor: "transparent",
                  borderRadius: "40px",
                  borderSize: "2px",
                  borderColor: "#cc2222",
                  link: "https://google.com",
                  text: "Acesse Agora",
                  textColor: "#fff",
                  fontSize: "16px",
                  decoration: "bold",
                  width: "200px",
                  height: "60px",
                },

              {
                positionX: "300px",
                positionY: "18rem",
                backgroundColor: "#cc2222",
                borderRadius: "40px",
                link: "https://google.com",
                text: "Acesse Agora",
                textColor: "#fff",
                fontSize: "16px",
                decoration: "bold",
                width: "200px",
                height: "60px",
              },
            ],
            texts: [
              {
                positionX: "400px",
                positionY: "50px",
                textColor: "#fff",
                fontSize: "32px",
                decoration: "underline",
                textChildren:
                  "Lorem ipsum is placeholder <a href='https://google.com'>text commonly</a> used in the graphic, print, and publishing industries for previewing <strong>layouts and visual</strong> mockups.",
                width: "100%",
                height: "auto",
                textAlignment: "right",
              },

              {
                positionX: "100%",
                positionY: "0",
                textColor: "#fff",
                fontSize: "2rem",
                decoration: "italic",
                textChildren:
                  "Credits here",
                width: "100%",
                height: "auto",
                textAlignment: "center",
              },
            ],
          },
        ]}
        enableTouch={true}
        controls={true}
        ride={undefined}
        indicators={false}
      />


---

Made with 💗 by [Patryck Gratão](https://www.linkedin.com/in/patryckgratao/) - Codeby Europe.
