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
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Modal
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Modal</h2>
    <hr />
    <div>
      <b-button v-b-modal.modal-center>Launch centered modal</b-button>

      <b-modal id="modal-center" centered title="BootstrapVue">
        <p class="my-4">Vertically centered modal!</p>
      </b-modal>
    </div>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Nav
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Nav</h2>
    <hr />
    <div>
      <b-nav tabs justified>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Link with a long name </b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Navbar
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Navbar</h2>
    <hr />
    <div>
      <b-navbar toggleable="lg">
        <b-navbar-brand href="/">BigCity</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown text="User" right>
              <b-dropdown-item href="#">Account</b-dropdown-item>
              <b-dropdown-item href="#">Settings</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href='#'>Link</b-nav-item>
            <b-nav-item href='#' disabled>Disabled Link</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Overlay
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Overlay</h2>
    <hr />
    <h3>Default</h3>
    <div>
      <b-overlay :show="true" rounded="sm">
        <b-card title="Card with overlay" aria-hidden="true">
          <b-card-text>Laborum consequat non elit enim exercitation cillum.</b-card-text>
          <b-card-text>Click the button to toggle the overlay:</b-card-text>
        </b-card>
      </b-overlay>
    </div>
    <h3>Blurred</h3>
    <div>
      <b-overlay
        id="overlay-background"
        show
        variant="transparent"
        opacity="1.00"
        blur="5px"
        rounded="circle"
      >
        <b-card title="Card with overlay" aria-hidden="true">
          <b-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </b-card-text>

          <b-button disabled variant="primary">Button</b-button>
        </b-card>
      </b-overlay>
    </div>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Pager
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Pager</h2>
    <hr />
    <div class="overflow-auto">
      <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
    </div>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Popover
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Popover</h2>
    <hr />
    <b-container fluid>
      <h5 class="my-3">Placement</h5>
      <b-row>
        <b-col
          v-for="placement in placements"
          :key="placement"
          md="4"
          class="py-4 text-center"
        >
          <b-button :id="`popover-1-${placement}`" variant="primary">{{ placement }}</b-button>
          <b-popover
            :target="`popover-1-${placement}`"
            :placement="placement"
            title="Popover!"
            triggers="hover focus"
            :content="`Placement ${placement}`"
          ></b-popover>
        </b-col>
      </b-row>

      <h5 class="my-3">Content via properties or slots</h5>
      <b-row>
        <b-col md="6" class="py-4 text-center">
          <b-button id="popover-2" variant="primary">Using properties</b-button>
          <b-popover
            target="popover-2"
            title="Prop Examples"
            triggers="hover focus"
            content="Embedding content using properties is easy"
          ></b-popover>
        </b-col>

        <b-col md="6" class="py-4 text-center">
          <b-button id="popover-3" variant="primary">Using slots</b-button>
          <b-popover target="popover-3" triggers="hover focus">
            <template #title>Content via Slots</template>
            Embedding content <span class="text-danger">using slots</span> affords you
            <em>greater <strong>control.</strong></em> and basic HTML support.
          </b-popover>
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Progress
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Progress</h2>
    <hr />
    <div>
      <b-progress :value="13" :max="100" show-progress animated></b-progress>
    </div>
    <div>
      <b-progress :value="42" :max="100" show-progress></b-progress>
    </div>
    <div>
      <b-progress :value="58" :max="100" animated></b-progress>
    </div>
    <div>
      <b-progress :value="31" :max="100"></b-progress>
    </div>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Table
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Table</h2>
    <hr />
    <div>
      <b-form-group label="Table Options" label-cols-lg="2" v-slot="{ ariaDescribedby }">
        <b-form-checkbox v-model="striped" :aria-describedby="ariaDescribedby" inline>Striped</b-form-checkbox>
        <b-form-checkbox v-model="bordered" :aria-describedby="ariaDescribedby" inline>Bordered</b-form-checkbox>
        <b-form-checkbox v-model="borderless" :aria-describedby="ariaDescribedby" inline>Borderless</b-form-checkbox>
        <b-form-checkbox v-model="outlined" :aria-describedby="ariaDescribedby" inline>Outlined</b-form-checkbox>
        <b-form-checkbox v-model="small" :aria-describedby="ariaDescribedby" inline>Small</b-form-checkbox>
        <b-form-checkbox v-model="hover" :aria-describedby="ariaDescribedby" inline>Hover</b-form-checkbox>
        <b-form-checkbox v-model="dark" :aria-describedby="ariaDescribedby" inline>Dark</b-form-checkbox>
        <b-form-checkbox v-model="fixed" :aria-describedby="ariaDescribedby" inline>Fixed</b-form-checkbox>
        <b-form-checkbox v-model="footClone" :aria-describedby="ariaDescribedby" inline>Foot Clone</b-form-checkbox>
        <b-form-checkbox v-model="noCollapse" :aria-describedby="ariaDescribedby" inline>No border collapse</b-form-checkbox>
      </b-form-group>

      <b-form-group v-slot="{ ariaDescribedby }" label="Head Variant" label-cols-lg="2">
        <b-form-radio-group
          v-model="headVariant"
          :aria-describedby="ariaDescribedby"
          class="mt-lg-2"
        >
          <b-form-radio :value="null" inline>None</b-form-radio>
          <b-form-radio value="light" inline>Light</b-form-radio>
          <b-form-radio value="dark" inline>Dark</b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Table Variant" label-for="table-style-variant" label-cols-lg="2">
        <b-form-select
          id="table-style-variant"
          v-model="tableVariant"
          :options="tableVariants"
        >
          <template #first>
            <option value="">-- None --</option>
          </template>
        </b-form-select>
      </b-form-group>

      <b-table
        :striped="striped"
        :bordered="bordered"
        :borderless="borderless"
        :outlined="outlined"
        :small="small"
        :hover="hover"
        :dark="dark"
        :fixed="fixed"
        :foot-clone="footClone"
        :no-border-collapse="noCollapse"
        :items="items"
        :fields="fields"
        :head-variant="headVariant"
        :table-variant="tableVariant"
      ></b-table>
    </div>
    <hr />
    <hr />
    <!------------------------------------------------------------------------------------------------------------------
    Toast
    ------------------------------------------------------------------------------------------------------------------->
    <h2>Toast</h2>
    <hr />
    <div>
      <b-button @click="makeToast()" class="mb-2">Default</b-button>
      <b-button variant="primary" @click="makeToast('primary')" class="mb-2">Primary</b-button>
      <b-button variant="secondary" @click="makeToast('secondary')" class="mb-2">Secondary</b-button>
      <b-button variant="danger" @click="makeToast('danger')" class="mb-2">Danger</b-button>
      <b-button variant="warning" @click="makeToast('warning')" class="mb-2">Warning</b-button>
      <b-button variant="success" @click="makeToast('success')" class="mb-2">Success</b-button>
      <b-button variant="info" @click="makeToast('info')" class="mb-2">Info</b-button>
    </div>
    <div>
      <b-button @click="toast('b-toaster-top-right')" class="mb-2">b-toaster-top-right</b-button>
      <b-button @click="toast('b-toaster-top-left')" class="mb-2">b-toaster-top-left</b-button>
      <b-button @click="toast('b-toaster-top-center')" class="mb-2">b-toaster-top-center</b-button>
      <b-button @click="toast('b-toaster-top-full')" class="mb-2">b-toaster-top-full</b-button>
      <b-button @click="toast('b-toaster-bottom-right', true)" class="mb-2">b-toaster-bottom-right</b-button>
      <b-button @click="toast('b-toaster-bottom-left', true)" class="mb-2">b-toaster-bottom-left</b-button>
      <b-button @click="toast('b-toaster-bottom-center', true)" class="mb-2">b-toaster-bottom-center</b-button>
      <b-button @click="toast('b-toaster-bottom-full', true)" class="mb-2">b-toaster-bottom-full</b-button>
    </div>
  </main>
</template>
<script>
import ExternalLink from '~/components/link/ExternalLink'
export default {
  components: { ExternalLink },
  data() {
    return {
      placements: [
        'topright',
        'top',
        'topleft',
        'bottomright',
        'bottom',
        'bottomleft',
        'righttop',
        'right',
        'lefttop',
        'rightbottom',
        'left',
        'leftbottom'
      ],
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
      ],
      tableVariants: [
        'primary',
        'secondary',
        'info',
        'danger',
        'warning',
        'success',
        'light',
        'dark'
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: '',
      noCollapse: false
    }
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
    makeToast(variant = null) {
      this.$bvToast.toast('Toast body content', {
        title: `Variant ${variant || 'default'}`,
        variant,
        solid: true
      })
    },
    toast(toaster, append = false) {
      this.counter++
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster,
        solid: true,
        appendToast: append
      })
    }
  },
}
</script>
