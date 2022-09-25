import TimelineEvent from "../models/TimelineEvent.js";

export const getAllEvents = async (req, res) => {
    try {
        const allEvents = await TimelineEvent.find({})       
        res.status(201).json(allEvents)
    } catch (error) {
        res.status(404).send(error)
    }}

export const createEvent = async (req,res)=> {
    try {
        const newEvent = new TimelineEvent(req.body)
        await newEvent.save()
        res.status(201).send(`New event ${newEvent.event} has been created`)
    } catch (error) {
        res.status(404).send(error)
}}

export const findEventById =  async(req, res)=> {
    try {
      const eventById = await TimelineEvent.findById(req.params.id);
      res.status(200).json(eventById)
    } catch (error) {
          res.status(405).send(error);
          console.error(error)
    }}

export const updateEvent = async (req,res)=> {
    try {
        const event = await TimelineEvent.findByIdAndUpdate(req.params.id, {$set:req.body}, {new: true})
        res.status(201).json(event)
    } catch (error) {
        res.status(405).send(error);
        console.error(error)
    }}
