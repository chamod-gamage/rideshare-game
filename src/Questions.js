const Questions = {
  r00: {
    text: "Welcome to your ride-sharing adventure!",
    picture: "https://media4.giphy.com/media/l1J9w8WgJkwpREQlG/giphy.gif",
    subtext:
      "Do you have the drive it takes to make it in the ride-sharing world?",
    next: "r-0",
  },
  "r-0": {
    text: "This is a choose your own adventure style game",
    picture: "https://media0.giphy.com/media/2jOcXFwhIEypPeQvOY/200.gif",
    subtext:
      "You'll be living out the life of a ride-share driver to get a feel of what they have to go through. Progress through the game by making strategic decisions - once you proceed with an option you won't be able to go back! Try your best to earn as much money and as high a rating as possible, but remember: your decisions may also impact your personal health as well as the environment.",
    next: "d-1",
  },

  "d-1": {
    text: "Start off by choosing your car and setup!",
    picture:
      "https://24autonet.com/wp-content/uploads/2020/06/tesla-model-y-vs-toyota-rav4.jpg",
    options: [
      {
        potential: { 0: "d-1-2" },
        text: "2017 Honda Rav4 - Reliable, combustion engine ($250)",
        impact: {
          cash: -250,
          health: -2,
          environment: -10,
        },
      },
      {
        potential: { 0: "d-1-2" },
        text: "2018 Toyota Prius - Well-rounded Hybrid ($350)",
        impact: {
          cash: -350,
          environment: -5,
        },
      },
      {
        potential: { 0: "d-1-2" },
        text: "2018 Tesla Model 3 - Fully electric, it's a tesla! ($500)",
        impact: {
          cash: -500,
          health: 5,
          environment: 10,
        },
      },
    ],
  },

  "d-1-2": {
    text:
      "After getting to know your car, you're tasked with buying insurance for your car",
    picture:
      "https://www.forbes.com/advisor/wp-content/uploads/2020/02/insurance-adjuster-e1582088495272.jpg",
    options: [
      {
        potential: { 0: "d-1-3" },
        text: "Basic insurance - enough to be driving on the roads! ($100)",
        impact: {
          cash: -100,
          health: -5,
        },
      },
      {
        potential: { 0: "d-1-3" },
        text:
          "Partial coverage insurance - will help cover 50% of accidents ($250)",
        impact: {
          cash: -250,
        },
      },
      {
        potential: { 0: "d-1-3" },
        text: "Premium insurance - fully cover any accidents ($300)",
        impact: {
          cash: -300,
          health: 5,
        },
      },
    ],
  },
  "d-1-3": {
    text:
      "With COVID cases ramping up, many drivers now face risk of infection. Your family is encouraging you to install a plexiglass screen between the front and back seats.",
    picture:
      "https://ewscripps.brightspotcdn.com/d1/0d/ba3339eb446bac4e9f03b1af3c1f/partition.jpg",
    options: [
      {
        potential: { 0: "d-1-4" },
        text: "Install the plexiglass screen ($100)",
        impact: {
          cash: -100,
          health: 5,
        },
      },
      {
        potential: { 0: "d-1-4" },
        text: "Take the risk driving without it",
        impact: {
          health: -10,
        },
      },
    ],
  },
  "d-1-4": {
    text:
      "You've heard that offering supplementary items to passengers like chargers or snacks increases driver ratings, do you purchase them? ",
    picture: "https://i.imgur.com/8GUs7pm.jpg",
    options: [
      {
        potential: { 0: "r-1" },
        text:
          "You find supplementary items unnecessary and will instead wow passengers with your driving.",
        impact: {},
      },
      {
        potential: { 0: "r-1" },
        text: "You spend $30 on buying supplementary items for your riders",
        impact: {
          cash: -30,
          rating: 5,
        },
      },
    ],
  },
  "r-1": {
    text:
      "You decide to head out for the day and accept your first ride as a rideshare driver",
    picture: "https://i.gifer.com/7rVF.gif",
    subtext: "Time to see what being a rideshare driver is all about!",
    next: "d-2",
  },
  "d-2": {
    text:
      "Just when you started driving, your check engine light starts flashing frantically. You’ve never seen this before, do you",
    picture:
      "https://www.autozone.com/diy/wp-content/uploads/2019/06/common-ignition-problems.jpg",
    options: [
      {
        potential: { 0: "d-2-1", 0.5: "d-2-2" },
        text: "Proceed to your next passenger",
        impact: {},
      },
      {
        potential: { 0: "r-d-2-2" },
        text: "Take a detour to the mechanic across town ($100)",
        impact: {
          cash: -100,
        },
      },
    ],
  },
  "d-2-1": {
    text:
      "As you drive along to your next passenger, your engine suddenly starts smoking. You have no choice but to get your car repaired",
    picture:
      "https://www.vmcdn.ca/f/files/sudbury/images/LocalImages/221116_engine_repair660.jpg;w=660",
    options: [
      {
        potential: { 0: "r-d-2-2" },
        text: "Visit your authorized auto dealership for repairs (-$150)",
        impact: {
          cash: -150,
        },
      },
      {
        potential: { 0: "r-d-2-2" },
        text:
          "An unlicensed buddy of yours offers to fix the car for cheap (-$75)",
        impact: {
          cash: -75,
          health: -5,
        },
      },
    ],
  },
  "r-d-2-2": {
    text: "After an hour, your car is all fixed and ready to go",
    picture:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-647333471-1586277995.jpg?crop=0.926xw:0.693xh;0.0593xw,0.153xh&resize=640:*",
    subtext: "You hop back in and are excited to get back on the road ",
    next: "d-2-2",
  },
  "d-2-2": {
    text:
      "You stumble across a trip from Toronto to Waterloo valued at $175. You will likely miss your Dad's birthday since this trip will take up most of your day, do you choose to accept?",
    picture: "https://ak.picdn.net/shutterstock/videos/1009460807/thumb/1.jpg",
    options: [
      {
        potential: { 0: "r-1-1-1" },
        text: "Accept the trip and start the drive to Waterloo ($175)",
        impact: {
          cash: 175,
          health: -6,
          rating: 4.5,
          environment: -6,
        },
      },
      {
        potential: { 0: "r-1-1" },
        text: "Cancel the trip and spend some quality time with your old man",
        impact: {
          health: 8,
        },
      },
    ],
  },
  "r-1-1-1": {
    text:
      "You take on the ride, but get stuck in a traffic jam on the way there. You spend more time idling than actually driving.",
    picture: "https://verde.ie/wp-content/uploads/2018/06/car-emissiona.png",
    subtext:
      "After an exhausting day spent stuck in traffic, you drop off your passenger and head home.",
    next: "r-2",
  },
  "r-1-1": {
    text:
      "Your Dad threw an absolute banger of a party. You feel much happier having spent the afternoon with him.",
    picture:
      "https://www.kivodaily.com/wp-content/uploads/2019/08/surprise-birthday-party-for-dad.jpg",
    subtext:
      "After spending some quality time with him, you head out to accept another passenger.",
    next: "d-2-3",
  },

  "d-2-3": {
    text:
      "You spend 10 minutes idling in the car with the engine on, waiting for a passenger with a 2 star rating to show up",
    picture:
      "https://globalnews.ca/wp-content/uploads/2013/03/emissions.jpg?quality=85&strip=all&w=720&h=379&crop=1",
    options: [
      {
        potential: { 0: "d-2-4" },
        text: "Continue idling, but call the passenger",
        impact: {
          environment: -3,
        },
      },
      {
        potential: { 0: "r-1-2" },
        text: "Cancel the trip",
        impact: {
          health: 2,
        },
      },
    ],
  },
  "d-2-4": {
    text: "You get directed straight to voicemail.. tough.",
    picture:
      "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/10/uber-screener-796x386.png",
    options: [
      {
        potential: { 0: "r-1-3" },
        text: "Continue idling, they'll probably show up anytime now",
        impact: {
          cash: 70,
          environment: -5,
          rating: 5,
        },
      },
      {
        potential: { 0: "r-1-2" },
        text: "Cancel the trip",
        impact: {
          health: 2,
        },
      },
    ],
  },
  "r-1-2": {
    text:
      "There seems to be no sign of the passenger, so to avoid further idling you cancel the ride.",
    picture:
      "https://specials-images.forbesimg.com/imageserve/1160487949/960x0.jpg?fit=scale",
    subtext:
      "With the time you saved, you continue on looking for new passengers .",
    next: "r-2",
  },
  "r-1-3": {
    text: "At last the passenger arrives and you begin the trip.",
    picture:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1575678883/assets/41/d1eac3-b7c3-4bc0-9c05-1bdac0da70b1/original/Header_4x5.jpg",
    subtext:
      "The passenger is super grateful for your patience and thanks you with a  great review and a large tip.",
    next: "r-2",
  },
  "r-2": {
    text: "You've had a long day and are ready to take a break",
    picture:
      "https://media2.giphy.com/media/cmynpRzWNbqOl9CdqT/giphy.gif?cid=ecf05e47h829m7vreca8sfizq96r9b99u011y4geqwv34f2g&rid=giphy.gif",
    subtext: "You pull in an additional $200 from your rides",
    impact: {
      cash: 200,
    },
    next: "d-3",
  },

  "d-3": {
    text:
      "You wake up early and recieve a request from a passenger going to the airport ($80)",
    picture:
      "https://iamsignificantca.lightningbasecdn.com/wp-content/uploads/2012/05/toomuchbaggage-%C2%A9-federicofoto-Fotolia.com_.jpg",
    options: [
      {
        potential: { 0: "d-3-1" },
        text:
          "Decline the ride and face a bad rating - there's no way his luggage will all fit in my car",
        impact: {
          health: -2,
          rating: 1,
        },
      },
      {
        potential: { 0: "r-2-1", 0.5: "r-2-2" },
        text:
          "Try your best to jam it all in, you may risk damaging your interior",
        impact: {
          cash: 80,
          environment: -3,
          rating: 5,
        },
      },
    ],
  },
  "r-2-1": {
    text:
      "After jamming everything in as tight as you can, you complete the trip and the customer thanks you for taking the extra luggage.",
    picture:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1561395660/assets/f1/36075b-52ae-4671-bb27-37bdc56a98fd/original/DE2.6.2.jpg",
    subtext: "You receive a good rating and a healthy tip",
    next: "d-3-1",
  },
  "r-2-2": {
    text:
      "You complete the trip, but notice that the luggage has damaged your seats.",
    picture: "https://i.redd.it/9uxhr6gs9xh41.jpg",
    subtext:
      "You stress over finding a repair shop that will repair your seats but eventually settle for a shop that charges $100",
    impact: {
      cash: -100,
      health: -5,
    },
    next: "d-3-1",
  },

  "d-3-1": {
    text:
      "You continue driving for the day but it appears that the group of riders you just picked up are clearly drunk",
    picture:
      "https://image.cnbcfm.com/api/v1/image/101107650-Drunkperson.jpg?v=1532564618&w=740&h=416",
    options: [
      {
        potential: { 0: "r-2-3" },
        text: "Politely ask them to leave - they may give you a bad rating",
        impact: {
          rating: 2,
          health: -2,
        },
      },
      {
        potential: { 0: "r-2-4", 0.5: "d-3-2" },
        text:
          "Continue on with the ride, ignoring their drunken conversation in the back ",
        impact: {
          cash: 60,
          health: -5,
          rating: 4,
          environment: -3,
        },
      },
    ],
  },
  "r-2-3": {
    text:
      "The passengers are outraged you asked them to leave. They throw drunken slurs at you but eventually leave the car.",
    picture:
      "https://sanfrancisco.cbslocal.com/wp-content/uploads/sites/15116056/2021/03/Capture-4.jpg",
    subtext: "The riders leave you with a 1 star rating :(",
    impact: {
      rating: 1,
    },
    next: "r-3",
  },
  "r-2-4": {
    text:
      "You finally manage to complete the trip, dropping off your passengers ($60)",
    picture:
      "https://st4.depositphotos.com/19391574/23206/v/600/depositphotos_232062798-stock-video-womans-leg-in-high-heel.jpg",
    subtext: "That could've went a lot worse!",
    impact: {},
    next: "r-3",
  },
  "d-3-2": {
    text:
      "One of the passengers ends up throwing up in your car, making a huge mess",
    picture:
      "https://www.goldeagle.com/wp-content/uploads/2018/12/Best-Way-to-Clean-Car-Interior-Plastic-min.png",
    options: [
      {
        potential: { 0: "r-3" },
        text: "Send your car to be professionally cleaned ($50)",
        impact: {
          cash: -50,
          health: 5,
        },
      },
      {
        potential: { 0: "r-3" },
        text: "Ignore the mess - you'll get to it.. eventually",
        impact: {
          health: -5,
          rating: 2,
        },
      },
    ],
  },
  "r-3": {
    text:
      "You give out a few more rides, but the drunk passengers and luggage situation have left you exhausted, you're ready to take a break",
    picture:
      "https://media3.giphy.com/media/BwqxBFQprJOTwHtfNE/giphy.gif?cid=ecf05e47cu4hp5yw8kgsrwycfzztkmq58l6agadll6ut2c5p&rid=giphy.gif",
    subtext: "You pull in an additional $180 from your rides",
    impact: {
      cash: 180,
    },
    next: "d-4",
  },
  "d-4": {
    text:
      "A new day begins, you hear about an opportunity to enhance your ride experience. You see accessibility issues and want to add that to increase revenue and contribute to a good cause ",
    picture: "https://miro.medium.com/max/1024/1*9nMDTaMLxcVMuP8ygVTyOQ.jpeg",
    options: [
      {
        potential: { 0: "d-4-1" },
        text:
          "Install accessibility features such as railings and ramps ($150)",
        impact: {
          cash: -150,
          rating: 5,
        },
      },
      {
        potential: { 0: "d-4-1" },
        text:
          "While they would be nice, lack of promising subsidies puts this way out of your budget",
        impact: {},
      },
    ],
  },
  "d-4-1": {
    text:
      "Continuing on, you pick up a new passenger but get a call from your mom in the middle of the ride",
    picture:
      "https://media.istockphoto.com/videos/mom-is-calling-as-a-missed-call-video-id1090850970?s=640x640",
    options: [
      {
        potential: { 0: "r-3-1", 0.5: "r-3-2" },
        text: "Pick up, she's your mom",
        impact: {},
      },
      {
        potential: { 0: "r-3-3", 0.5: "r-3-4" },
        text: "Choose not to answer 😎",
        impact: {},
      },
    ],
  },
  "r-3-1": {
    text: "You answered using your car's speaker system...",
    picture: "https://i.ytimg.com/vi/TGLCAGbHZ7w/maxresdefault.jpg",
    subtext:
      "The rider found it weird to listen to the whole call, resulting in a lower rating and tip ($30)",
    impact: {
      rating: 2.5,
      cash: 30,
      environment: -3,
    },
    next: "d-4-2",
  },
  "r-3-2": {
    text: "You answered using your car's speaker system...",
    picture: "https://i.ytimg.com/vi/TGLCAGbHZ7w/maxresdefault.jpg",
    subtext:
      "The rider thought your mom seemed very nice and gave you a bigger tip ($55)",
    impact: {
      rating: 5,
      cash: 55,
      environment: -3,
    },
    next: "d-4-2",
  },
  "r-3-3": {
    text: "Choosing to priotize work...",
    picture:
      "https://graceforsingleparents.com/wp-content/uploads/mom-yelling-at-child.jpg",
    subtext:
      "You finish the trip, but your mom gets upset. Working all the time is starting to stress you out.",
    impact: {
      rating: 4,
      cash: 35,
      health: -5,
      environment: -3,
    },
    next: "d-4-2",
  },
  "r-3-4": {
    text: "The rider doesn't seem to notice",
    picture: "https://i.ytimg.com/vi/TGLCAGbHZ7w/maxresdefault.jpg",
    subtext: "You recieve a good rating and tip from the rider ($55)",
    impact: {
      rating: 5,
      cash: 55,
      environment: -3,
    },
    next: "d-4-2",
  },
  "d-4-2": {
    text:
      "As you take a break, a grassroots organization focused on rideshare driver rights has reached out to you and asks if you would like to attend their introductory meeting.",
    picture:
      "https://i.insider.com/5cd2ed63021b4c0d807dc90c?width=1067&format=jpeg",
    options: [
      {
        potential: { 0: "d-4-3" },
        text: "You agree to attend and spend an hour driving to get there",
        impact: {
          environment: -5,
        },
      },
      {
        potential: { 0: "d-4-4" },
        text: "Politely decline, you don't have time for that",
        impact: {},
      },
    ],
  },
  "d-4-3": {
    text:
      "You get a ride request on the way there, do you take the detour to fulfill it but risk being late to the meeting?",
    picture:
      "http://www.bnnbloomberg.ca/polopoly_fs/1.1322221!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/uber-lyft-driver.jpg",
    options: [
      {
        potential: { 0: "r-3-5" },
        text: "No - you don't want to risk being late",
        impact: {},
      },
      {
        potential: { 0: "r-3-5" },
        text: "Yes - can't turn down money ($40)",
        impact: {
          cash: 40,
          environment: -3,
        },
      },
    ],
  },
  "d-4-4": {
    text:
      "Are you sure you don't want to go? They're offering free cookies and it's a chance to get to know some of your fellow rideshare drivers.",
    picture:
      "https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg",
    options: [
      {
        potential: { 0: "r-3-5" },
        text: "Cookies 👀 ? Your mind has been swayed",
        impact: {
          environment: -5,
          health: 12,
        },
      },
      {
        potential: { 0: "r-3-6" },
        text: "Cookies are nice, but income comes first",
        impact: {
          cash: 40,
          environment: -2,
        },
      },
    ],
  },
  "r-3-5": {
    text:
      "You arrive at the meeting just in time for things to get interesting",
    picture:
      "https://www.cnet.com/a/img/1hciSJEgDR4AfHJr6ZuKU_WdaYk=/940x0/2019/11/06/f24a3fef-5bc3-487d-889e-1053f8c27af0/20191106-111451-1.jpg",
    subtext:
      "People are not happy about the efforts of ridesharing companies to pass legislation that would revoke your lawful status as an employee.",
    impact: {
      environment: -3,
    },
    next: "d-4-5",
  },
  "r-3-6": {
    text: "Looks like they're live streaming the event",
    picture:
      "https://thumbs.dreamstime.com/b/june-minsk-belarus-cameraman-large-camera-takes-pictures-people-protest-june-minsk-belarusian-people-walk-188548051.jpg",
    subtext: "You get to participate after all, though in a limited manner.",
    impact: {
      environment: 3,
    },
    next: "d-4-5",
  },
  "d-4-5": {
    text:
      "They're asking everyone to participate in a week-long protest against a legislation that could take away essentials such as healthcare insurance, sick leave, worker's compensation, and unemployment insurance.",
    picture:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/imrgoicw8eEw/v1/1000x-1.jpg",
    options: [
      {
        potential: { 0: "r-3-7", 0.5: "r-3-8" },
        text: "Protest with your fellow rideshare drivers!",
        impact: {},
      },
      {
        potential: { 0: "r-3-9" },
        text:
          "There's no point protesting, a week's worth of driving lost would be a pretty big hit to your bank account.",
        impact: {
          cash: 40,
          environment: -2,
        },
      },
    ],
  },
  "r-3-7": {
    text: "You spend a week valiantly protesting against this legislation.",
    picture:
      "https://www.myveronanj.com/wp-content/uploads/2020/09/FrustratedDriver.jpg",
    subtext:
      "You make the national news with your efforts, and even get influencers on social media to start posting a white wheel on a black square to support you. Unfortunately, the financial lobbying power of these companies is too much - with over $1 billion dollars spent in lobbying efforts, the legislation has passed. You are no longer classified as an employee.",
    impact: {
      health: -15,
      environment: +5,
    },
    next: "r-3-10",
  },
  "r-3-8": {
    text: "You spend a week valiantly protesting against this legislation.",
    picture:
      "https://www.cnet.com/a/img/jRyy-f_YkXTsz0tqk_3niolirjQ=/940x0/2019/07/19/5548d566-7d5f-44c5-80e0-534d9fd4a2d8/uber-driver-ride-sharing-protest-unions7776.jpg",
    subtext:
      "You make the national news with your efforts, and even get influencers on social media to start posting a white wheel on a black square to support you. Somehow, against all odds you manage to inspire enough of your legislators to block the legislation pushed by large rideshare companies.",
    impact: {
      health: +15,
      environment: +5,
    },
    next: "r-3-10",
  },
  "r-3-9": {
    text: "The legislation passes",
    picture:
      "https://www.maxim.com/.image/t_share/MTUzODM0NzU4MzkwOTQ5NTc5/freshprince.png",
    subtext:
      "It was almost bound to happen with all the lobbying power of the rideshare companies. At least you didn't waste a week's worth of driving in a futile protest",
    impact: {
      health: -10,
      cash: 50,
      environment: -5,
    },
    next: "r-3-11",
  },
  "r-3-10": {
    text:
      "After a hectic week, with all the legislation news going around you decide to take a break",
    picture:
      "https://media2.giphy.com/media/p6zElcl27INBS/giphy.gif?cid=ecf05e47vkxxa0u4wtrrfybg47eryi2s9r40k3gkie8ddodj&rid=giphy.gif",
    subtext:
      "Although you missed out on income this week, you're happy to have stood up for yourself",
    impact: {},
    next: "d-5",
  },
  "r-3-11": {
    text:
      "After a hectic week, with all the legislation news going around you decide to take a small break and count your earnings",
    picture:
      "https://media2.giphy.com/media/p6zElcl27INBS/giphy.gif?cid=ecf05e47vkxxa0u4wtrrfybg47eryi2s9r40k3gkie8ddodj&rid=giphy.gif",
    subtext: "You found that you earned an additional $205 this week",
    impact: {
      cash: 205,
    },
    next: "d-5",
  },
  "d-5": {
    text:
      "Starting off your new day, you notice one of the passengers has been exhibiting feverish symptoms",
    picture:
      "https://media.istockphoto.com/videos/young-attractive-man-is-coughing-while-driving-in-car-video-id935719162?s=640x640",
    options: [
      {
        potential: { 0: "r-4" },
        text: "Politely ask them to leave and refund their fare",
        impact: {},
      },
      {
        potential: { 0: "r-4-1", 0.5: "r-4-2" },
        text:
          "Continue driving, this is nothing you haven't experienced before ($60)",
        impact: {
          cash: 60,
          rating: 4.5,
          environment: -3,
        },
      },
    ],
  },
  "r-4": {
    text: "You refund their fare but the passenger is outraged.",
    picture:
      "https://www.telegraph.co.uk/content/dam/cars/Spark/MotorEasy/road-rage-woman-gestures-xlarge.jpg",
    subtext: "The outraged passenger leaves a 1 star rating",
    impact: {
      rating: 1,
      health: 2,
    },
    next: "r-5",
  },
  "r-4-1": {
    text:
      "You drop your passenger off, but after a few days you develop an intense fever. You end up having to take a trip to the ER",
    picture:
      "https://www.medplushealth.ca/wp-content/uploads/bigstock-Clean-Empty-Bed-In-A-Hospital-282271810-1024x683.jpg",
    subtext: "The ER trip ends up costing a hefty ($150)",
    impact: {
      health: -15,
      cash: -150,
    },
    next: "r-5",
  },
  "r-4-2": {
    text:
      "You drop your passenger without any hiccups and continue about your day.",
    picture:
      "https://www.staveleyhead.co.uk/wp-content/uploads/2018/12/Dropping_off_at_the_airport.jpg",
    subtext: "Perhaps opening the windows will freshin up the air",
    impact: {},
    next: "r-5",
  },
  "r-5": {
    text:
      "Getting back on the road, you manage to take a few rides before the end of the week",
    picture:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKBq0OP0G.6Q/v0/1000x-1.jpg",
    subtext: "You end up securing $135 for the day",
    impact: {
      cash: 135,
    },
    next: "r-6",
  },
  "r-6": {
    text: "You decide to take a break from ridesharing",
    picture: "https://media2.giphy.com/media/l0ExbyXKaDydXjH3y/giphy.gif",
    subtext:
      "Ridesharing has been an eye opening experience, but has also been filled with many challenges.",
    impact: {},
    next: "end",
  },
};

export { Questions };
