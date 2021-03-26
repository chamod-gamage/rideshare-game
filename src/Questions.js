const Questions = {
  "d-1": {
    text: "This is a scenario. Do you:",
    picture:
      "https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2014/10/Uber-driver-2-1024x768.jpg",
    options: [
      {
        potential: { 0: "d-1-1" },
        text: "Go to subdecision A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
      {
        potential: { 0: "d-1-2", 0.5: "d-1-3" },
        text: "Go to subdecision B or maybe C",
      },
    ],
  },
  "d-1-1": {
    text: "This is subdecision A. Do you:",
    picture:
      "https://i.insider.com/5f11969f4dca68182c0c1684?width=750&format=jpeg&auto=webp",
    options: [
      {
        potential: { 0: "r-1-1-1" },
        text: "Go to result r-1-1-1",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
      {
        potential: { 0: "r-1-1-2" },
        text: "Go to result A-A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
    ],
  },
  "d-1-2": {
    text: "This is a scenario. Do you:",
    picture: "",
    options: [
      {
        potential: { 0: "r-1-2-1" },
        text: "Go to result A-A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
      {
        potential: { 0: "r-1-2-2" },
        text: "Go to result A-A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
    ],
  },
  "d-1-3": {
    text: "This is a scenario. Do you:",
    picture: "",
    options: [
      {
        potential: { 0: "r-1-2-1" },
        text: "Go to result A-A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
      {
        potential: { 0: "r-1-2-2" },
        text: "Go to result A-A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
    ],
  },
  "r-1-1-1": {
    text: "This is result A-A. The impacts are encoded below",
    picture:
      "https://cdn.financebuzz.com/images/2018/06/19/uber-app-not-working.jpg",
    subtext:
      "This is result A-A. The impacts are encoded belowThis is result A-A. The impacts are encoded belowThis is result A-A. The impacts are encoded belowThis is result A-A. The impacts are encoded below",
    next: "end",
  },
  "r-1-1-2": {
    text: "This is result A-B. The impacts are encoded below",
    picture: "",
    subtext:
      "This is result A-A. The impacts are encoded belowThis is result A-A. The impacts are encoded belowThis is result A-A. The impacts are encoded belowThis is result A-A. The impacts are encoded below",
    next: "d-2",
  },
  "r-1-2-1": {
    text: "This is result B-A. The impacts are encoded below",
    picture: "",
    subtext:
      "This is result A-A. The impacts are encoded belowThis is result A-A. The impacts are encoded belowThis is result A-A. The impacts are encoded belowThis is result A-A. The impacts are encoded below",
    next: "d-2",
  },
  "r-1-2-2": {
    text: "This is result B-B. The impacts are encoded below",
    picture: "",
    subtext:
      "This is result A-A. The impacts are encoded belowThis is result A-A. The impacts are encoded belowThis is result A-A. The impacts are encoded belowThis is result A-A. The impacts are encoded below",
    next: "d-2",
  },
};

export { Questions };
