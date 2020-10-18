const newBuildingPageContent = {
  address: {
    postcode: '',
    streetName: '',
    streetNumber: '',
    city: 'Melbourne',
    state: 'VIC',
    formatted: ''
  },
  browserTabTitle: 'pineapple',
  description: '',
  mainNavButtons: [
    'Home',
    'Reviews',
    'FAQs',
    'Get In Touch'
  ],
  mainNavSectors: [
    'home',
    '#testimonials',
    '#faq',
    '#contact'
  ],
  top: {
    header: '[Main Header...]',
    text: '[Header text here...\nHeader text here...\nHeader text here...]',
    button: 'Get In Touch',
    goto: '#contact',
    pictureURL: 'https://api.pineapple.net.au/images/default.jpg'
  },
  info: {
    header: '[Title]',
    text: '[Some text here\nSome text here\n...]',
    offer: [
      {
        blackText: '[offer...]',
        greentext: '[offer...]'
      }
    ]
  },
  faq: {
    header: '[FAQ title...]',
    button: 'Get In Touch',
    goto: '#contact',
    items: [
      {
        question: '[Question]',
        answer: '[Answer text...\nAnswer text...\nAnswer text...]'
      }
    ]
  },
  testimonials: {
    header: '[Reviews title...]',
    button: 'Get In Touch',
    goto: '#contact'
  },
  userForm: {
    button: 'Send',
    title: 'Ask Questions Or Get Connected Today',
    fieldsToShow: [
      {
        type: 'text',
        placeholder: 'Full name*',
        required: true
      },
      {
        type: 'text',
        placeholder: 'Unit / Apartment number*',
        required: true
      },
      {
        type: 'email',
        placeholder: 'Email*',
        required: true
      },
      {
        type: 'phone',
        placeholder: 'Phone*',
        required: true
      },
      {
        type: 'list',
        placeholder: 'Speed : Price /Mth*',
        required: true,
        available: [
          '50/50 Mbps : $50/Mth',
          '150/150 Mbps : $69Mth',
          '500/500 Mbps : $140/Mth',
          '1000/1000 Mbps : $250/Mth'
        ]
      },
      {
        type: 'list',
        placeholder: 'Contract Term*',
        required: true,
        available: [
          '12 Months / First 3 Free / Free Modem',
          'Month to Month $99 Installation'
        ]
      },
      {
        type: 'date',
        placeholder: 'Preferred Installation Date',
        required: false
      },
      {
        type: 'time',
        placeholder: 'Preferred Installation Time - AM / PM Specific',
        required: false
      },
      {
        type: 'list',
        placeholder: 'Where Did You Hear About Us*',
        required: false,
        available: [
          'Social Media',
          'Website',
          'Family and Friends',
          'Marketing Material',
          'Building Manager',
          'Other'
        ]
      },
      {
        type: 'message',
        placeholder: 'Additional Notes',
        required: false
      }
    ]
  }
}

export default newBuildingPageContent
