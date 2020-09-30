const userForm = {
  title: 'Meet Melbourne’s New Net',
  button: 'Go Lightspeed',
  fieldsToShow: [
    {
      placeholder: 'Full name*',
      required: true,
      type: 'text'
    },
    {
      placeholder: 'Unit / Apartment number*',
      required: true,
      type: 'text'
    },
    {
      placeholder: 'Street Name and Number*',
      required: true,
      type: 'text'
    },
    {
      placeholder: 'State*',
      required: true,
      type: 'state'
    },
    {
      placeholder: 'Postcode',
      required: false,
      type: 'postcode'
    },
    {
      placeholder: 'Email*',
      required: true,
      type: 'email'
    },
    {
      placeholder: 'Phone*',
      required: true,
      type: 'phone'
    },
    {
      available: ['50/50 Mbps : $50/Mth', '150/150 Mbps : $69Mth', '500/500 Mbps : $140/Mth', '1000/1000 Mbps : $250/Mth'],
      placeholder: 'Speed : Price /Mth*',
      required: true,
      type: 'list'
    },
    {
      available: ['12 Months / First 3 Free / Free Modem', 'Month to Month $99 Installation'],
      placeholder: 'Contract Term*',
      required: true,
      type: 'list'
    },
    {
      placeholder: 'Preferred Installation Date',
      required: false,
      type: 'text'
    },
    {
      placeholder: 'Preferred Installation Time - AM / PM Specific',
      required: false,
      type: 'text'
    },
    {
      available: ['Social Media', 'Website', 'Family and Friends', 'Marketing Material', 'Building Manager', 'Other'],
      placeholder: 'Where Did You Hear About Us*',
      required: true,
      type: 'list'
    },
    {
      placeholder: 'Additional Notes',
      required: false,
      type: 'message'
    }
  ]
}

export default userForm
