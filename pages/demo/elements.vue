<template>
  <main>
    <NuxtLink to="/demo">Demo Start Page</NuxtLink>
    <NuxtLink to="/demo/elements">Elements</NuxtLink>
    <hr />
    <h1>(HTML-)Elemente</h1>
    <p>
      Viele Komponenten sind von <ExternalLink link='https://bootstrap-vue.org/docs/components' title='Bootstrap-Vue'></ExternalLink> geerbt und bearbeitet
    </p>
    <!------------------------------------------------------------------------------------------------------------------
    Headlines
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Headlines</h2>
    <hr />
    <h1>Headline H1</h1>
    <h2>Headline H2</h2>
    <h3>Headline H3</h3>
    <h4>Headline H4</h4>
    <h5>Headline H5</h5>
    <h6>Headline H6</h6>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Text
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Textformatierung</h2>
    <hr />
    <h3>Default</h3>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet.
    </p>
    <h3>Basisformatierungen (Links, Fett, Kursiv, Code, etc.)</h3>
    <p>
      Fett: Lorem ipsum <b>dolor</b> sit amet<br />
      Kursiv: Lorem ipsum <i>dolor</i> sit amet<br />
      Code: Lorem ipsum <code>dolor</code> sit amet<br />
      Pre: Lorem ipsum <pre>dolor</pre> sit amet<br />
      Link: Lorem ipsum <a href='#'>dolor</a> sit amet<br />
    </p>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Buttons
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Buttons</h2>
    <hr />
    <h3>Default</h3>
    <div>
      <b-button variant="primary">Primary</b-button>
      <b-button variant="secondary">Secondary</b-button>
      <b-button variant="success">Success</b-button>
      <b-button variant="danger">Danger</b-button>
      <b-button variant="warning">Warning</b-button>
      <b-button variant="info">Info</b-button>
      <b-button variant="light">Light</b-button>
      <b-button variant="dark">Dark</b-button>
    </div>
    <div>
      <b-button variant="outline-primary">Outline Primary</b-button>
      <b-button variant="outline-secondary">Outline Secondary</b-button>
      <b-button variant="outline-success">Outline Success</b-button>
      <b-button variant="outline-danger">Outline Danger</b-button>
      <b-button variant="outline-warning">Outline Warning</b-button>
      <b-button variant="outline-info">Outline Info</b-button>
      <b-button variant="outline-light">Outline Light</b-button>
      <b-button variant="outline-dark">Outline Dark</b-button>
    </div>
    <h3>Button Groups</h3>
    <div>
      <b-button-group>
        <b-button>Button 1</b-button>
        <b-button>Button 2</b-button>
        <b-button>Button 3</b-button>
      </b-button-group>
    </div>
    <div class="mt-3">
      <b-button-group>
        <b-button variant="success">Success</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="warning">Warning</b-button>
      </b-button-group>
    </div>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Calendar
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Kalender</h2>
    <hr />
    <div>
      <b-calendar></b-calendar>
    </div>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Cards
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Cards</h2>
    <hr />
    <h3>Default</h3>
    <div>
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
    <h3>Titles, Text & Links</h3>
    <div>
      <b-card title="Card title" sub-title="Card subtitle">
        <b-card-text>
          Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
          content.
        </b-card-text>

        <b-card-text>A second paragraph of text in the card.</b-card-text>

        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>
      </b-card>
    </div>
    <h3>Bild-Ausrichtungen</h3>
    <div>
      <div>
        <h4>Top and Bottom</h4>
        <b-card-group deck>
          <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
            <b-card-text>
              Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
          </b-card>

          <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
            <b-card-text>
              Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-4">
        <h4>Left and Right (or Start and End)</h4>
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>

        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>
      </div>
    </div>
    <h3>Overlay</h3>
    <div>
      <b-card
        overlay
        img-src="https://picsum.photos/900/250/?image=3"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
    </div>
    <h3>Header & Footer</h3>
    <div>
      <b-card-group deck>
        <b-card
          header="featured"
          header-tag="header"
          footer="Card Footer"
          footer-tag="footer"
          title="Title"
        >
          <b-card-text>Header and footers using props.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>

        <b-card title="Title" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Header Slot</h6>
          </template>
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
          <template #footer>
            <em>Footer Slot</em>
          </template>
        </b-card>
      </b-card-group>
    </div>
    <h3>Horizontal</h3>
    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Horizontal Card">
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h3>Colored</h3>
    <div>
      <div>
        <b-card-group deck>
          <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-3">
        <b-card-group deck>
          <b-card bg-variant="info" text-variant="white" header="Info" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-3">
        <b-card-group deck>
          <b-card bg-variant="light" header="Light" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card header="Default" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <h3>Bordered</h3>
    <div>
      <div>
        <b-card-group deck>
          <b-card
            border-variant="primary"
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center"
          >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card
            border-variant="secondary"
            header="Secondary"
            header-border-variant="secondary"
            align="center"
          >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card border-variant="success" header="Success" align="center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-3">
        <b-card-group deck>
          <b-card border-variant="info" header="Info" align="center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card
            border-variant="warning"
            header="Warning"
            header-bg-variant="transparent"
            align="center"
          >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card
            border-variant="danger"
            header="Danger"
            header-border-variant="danger"
            header-text-variant="danger"
            align="center"
          >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-3">
        <b-card-group deck class="mb-3">
          <b-card border-variant="light" header="Light" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card border-variant="dark" header="Dark" align="center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <h3>Mit Navigation</h3>
    <div>
      <b-card no-body>
        <b-card-header header-tag="nav">
          <b-nav card-header tabs>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Inactive</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </b-card-header>

        <b-card-body class="text-center">
          <b-card-title>Card Title</b-card-title>

          <b-card-text>
            With supporting text below as a natural lead-in to additional content.
          </b-card-text>

          <b-button variant="primary">Go somewhere</b-button>
        </b-card-body>
      </b-card>
    </div>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Carousel
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Carousel</h2>
    <hr />
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0 0 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          caption="First slide"
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Accordion
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Accordion</h2>
    <hr />
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-1 block variant="info">Accordion 1</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
            <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore VHS.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-2 block variant="info">Accordion 2</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore VHS.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-3 block variant="info">Accordion 3</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore VHS.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

  </main>
</template>
<script>
import ExternalLink from '~/components/link/ExternalLink'
export default {
  components: { ExternalLink }
}
</script>
