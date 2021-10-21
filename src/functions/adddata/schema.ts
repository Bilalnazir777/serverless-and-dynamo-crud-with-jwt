export default {
  type: "object",
  properties: {
    Customername: { type: 'string' },
    age: { type: 'string' }
  },
  required: ['Customername', 'age']
} as const;
