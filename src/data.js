var data = {};

data.availability = {
  available: true
};

data.info = {
  name: "Matt Ginn",
  email: "hi@matt.codes",
  role: "Front-end developer",
  location: "Torquay, England",
  website: "//matt.codes"
};

data.social_networks = [
  {
    name: "Twitter",
    url: "//twitter.com/mginn_",
    username: "mginn_"
  },
  {
    name: "Github",
    url: "//github.com/mattginn",
    username: "mattginn"
  },
  {
    name: "Dribbble",
    url: "//dribbble.com/mattginn",
    username: "mattginn"
  },
  {
    name: "Skype",
    url: "skype:m.ginn?add",
    username: "m.ginn"
  }
];

data.clients = {
  featured: [
    {
      name: "Socialmist",
      description: "Social media application",
      role: "UI Developer",
      logo: "/img/socialmist-logo.png",
      url: "//socialmist.com",
      icon: "/img/socialmist-folio-icon.png",
      link: true,
      visible: true
    },
    {
      name: "Switch Place",
      description: "House swapping innovation",
      role: "UI Developer",
      url: "//switchplace.co",
      icon: "/img/switchplace-folio-icon.png",
      link: true,
      visible: true
    },
    {
      name: "MW Ventures",
      description: "Digital Web Agency",
      role: "Front end Developer",
      logo: "/img/mwventures-logo.png",
      url: "//mwventures.co",
      icon: "/img/mwventures-folio-icon.png",
      link: true,
      visible: true
    },
    {
      name: "Cafe Stallbacken",
      description: "Café & Restaurant",
      role: "Design & Development",
      logo: "/img/stallbacken-logo.png",
      url: "//cafestallbacken.se",
      icon: "/img/stallbacken-folio-icon.png",
      link: true,
      visible: true
    },
    {
      name: "ZoFlyNow",
      description: "Backend applications",
      role: "Front end Development",
      url: "//zoflynow.azurewebsites.net/",
      icon: "/img/zoflynow-folio-icon.png",
      link: true,
      visible: true
    },
    {
      name: "Pilot Pod",
      description: "Aircraft schedule application",
      role: "Front end Development",
      logo: "/img/pilotpod-logo.png",
      url: "//pilotpod.co.uk",
      icon: "/img/pilotpod-folio-icon.png",
      link: true,
      visible: true
    }
  ]
};

data.text = {
  intro: "I am a front-end developer living in Torquay, England. I design & develop websites & web applications.",
  contact: "I am always looking for new projects that i can play a central role in, if you are in need of a skilled developer with an eye for design, please dont hesitate to contact me.",
  available: "I am currently available for new projects.",
  unavailable: "I am currently unavailable for new projects. Sorry!"
};

export default data;
