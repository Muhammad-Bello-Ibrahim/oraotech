# Frontend Integration Guide

## Connecting Frontend Forms to Serverless API Endpoints

The backend has been converted to Vercel serverless functions. Here's how to connect your frontend forms:

### API Endpoints

After deployment on Vercel, your endpoints will be available at:

- `https://your-domain.vercel.app/api/health` (GET)
- `https://your-domain.vercel.app/api/contact` (POST) 
- `https://your-domain.vercel.app/api/siwes` (POST)

### Contact Form Integration

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "company": "Optional Company Name",
  "message": "Your message here (minimum 10 characters)"
}
```

**Response Success**:
```json
{
  "success": true,
  "message": "Message received!",
  "data": { "id": "1234567890" }
}
```

**Response Error**:
```json
{
  "success": false,
  "errors": [
    { "field": "email", "message": "Please provide a valid email address" }
  ]
}
```

### SIWES Application Integration

**Endpoint**: `POST /api/siwes`

**Request Body**:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "08123456789", 
  "university": "University of Example",
  "course": "Computer Science",
  "level": "300",
  "duration": "6 months",
  "track": "Software Development",
  "motivation": "Detailed motivation text (minimum 50 characters)"
}
```

**Response Success**:
```json
{
  "success": true,
  "message": "SIWES application submitted!",
  "data": {
    "id": "1234567890",
    "applicationNumber": "SIWES-1234567890"
  }
}
```

### Frontend Example Code

```javascript
// Contact form submission
async function submitContactForm(formData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Handle success
      console.log('Contact form submitted successfully');
    } else {
      // Handle validation errors
      console.log('Validation errors:', result.errors);
    }
  } catch (error) {
    console.error('Submission error:', error);
  }
}

// SIWES application submission  
async function submitSiwesApplication(formData) {
  try {
    const response = await fetch('/api/siwes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Handle success
      console.log('Application submitted:', result.data.applicationNumber);
    } else {
      // Handle validation errors
      console.log('Validation errors:', result.errors);
    }
  } catch (error) {
    console.error('Submission error:', error);
  }
}
```

### Validation Rules

**Contact Form**:
- `name`: Minimum 2 characters
- `email`: Valid email format
- `message`: Minimum 10 characters  
- `company`: Optional field

**SIWES Application**:
- `fullName`: Minimum 2 characters
- `email`: Valid email format
- `phone`: Minimum 10 characters
- `university`: Minimum 2 characters
- `course`: Minimum 2 characters
- `level`: Required
- `duration`: Required
- `track`: Required
- `motivation`: Minimum 50 characters

### Error Handling

All endpoints return proper HTTP status codes:
- `200`: Success
- `400`: Validation errors
- `405`: Method not allowed
- `500`: Server error

CORS is enabled for all origins, so frontend can make requests from any domain.