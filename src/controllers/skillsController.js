const Skill = require('../models/skillModel');
const User = require('../models/userModel');

// GET /get-user-skills
const getUsersSkills = async (req, res) => {
    try {
        const data = await User.findById(req.body.id);
        res.send({ success: data ? true : false, data: data.skills });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

// ADD /add-skills
const addSkillsToUser = async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.body.id, {
            skills: req.body.skills,
        });
        res.send({ success: data ? true : false });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

// GET /skills
const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// GET /skills/:id
const getSkillById = async (req, res) => {
    const { id } = req.params;

    try {
        const skill = await Skill.findById(id);

        if (!skill) {
            return res.status(404).json({ error: 'Skill not found' });
        }

        res.json(skill);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// POST /skills
const addSkill = async (req, res) => {
    const skillData = req.body;

    try {
        const newSkill = await Skill.create(skillData);
        res.status(201).json(newSkill);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// PUT /skills/:id
const updateSkill = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const skill = await Skill.findByIdAndUpdate(id, updatedData, { new: true });

        if (!skill) {
            return res.status(404).json({ error: 'Skill not found' });
        }

        res.json(skill);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// DELETE /skills/:id
const deleteSkill = async (req, res) => {
    const { id } = req.params;

    try {
        const skill = await Skill.findByIdAndDelete(id);

        if (!skill) {
            return res.status(404).json({ error: 'Skill not found' });
        }

        res.json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllSkills,
    getSkillById,
    addSkill,
    updateSkill,
    deleteSkill,
    addSkillsToUser,
    getUsersSkills
};
