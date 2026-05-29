# growth-charter-renderer
# Growth Charter Renderer

## Overview

This project generates a Growth Charter for a business account using structured CRM node data and AI-assisted transcript analysis.

The application consists of two phases:

### Phase A

* Store Account and Node data in MongoDB
* Render a Growth Charter using predefined mappings
* Generate a structured business assessment document

### Phase B

* Accept founder/business transcripts
* Use Gemini API to extract CRM node values
* Validate extracted values
* Generate structured node outputs for charter generation

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Google Gemini API
* HTML / Markdown Rendering

---

## Architecture

Transcript
↓
Gemini Extraction
↓
Node Validation
↓
MongoDB
↓
Render Map
↓
Growth Charter Renderer
↓
HTML Output

---

## API Endpoints

### Get Accounts

GET /api/accounts

### Get Nodes

GET /api/nodes

### Generate Growth Charter

GET /api/accounts/:id/charter

### Extract Nodes from Transcript

POST /api/extract-transcript

Body:

{
"transcript": "Founder conversation text"
}

---

## AI Guardrails

To reduce AI hallucination:

* Required node validation
* Range validation for node values
* Structured JSON output enforcement
* Fallback responses for API failures
* Manual testing of generated outputs

---

## Setup

npm install

Create .env file:

MONGO_URI=mongodb://127.0.0.1:27017/deepthought
PORT=5000
GEMINI_API_KEY=YOUR_KEY

Seed Database:

node seed.js

Run Server:

node server.js
