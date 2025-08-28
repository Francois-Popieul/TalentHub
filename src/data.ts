import type { JobData } from "./types/JobOfferTypes";
import type { JobOffer } from "./types/JobOfferTypes";

export const missionData: JobData = {
    skills: [
        { label: "API Rest", value: "api_rest" },
        { label: "PHP", value: "php" },
        { label: "Symfony", value: "symfony" },
        { label: "TypeScript", value: "typescript" },
        { label: "JavaScript", value: "javascript" },
        { label: "React", value: "react" },
        { label: "node.js", value: "node" },
        { label: "PostgreSQL", value: "postgresql" },
    ],
    missionTypes: [
        { label: "Temps plein", value: "full_time" },
        { label: "Temps partiel", value: "part_time" },
        { label: "Freelance", value: "freelance" },
        { label: "Stage", value: "internship" },
        { label: "Consulting", value: "consulting" },
    ],
    salaryUnits: [
        { label: "heure", value: "hour" },
        { label: "jour", value: "day" },
        { label: "semaine", value: "week" },
        { label: "mois", value: "month" },
        { label: "an", value: "year" },
        { label: "forfait", value: "fixed" },
    ],
};

export const jobOffers: JobOffer[] = [
    {
        id: 0,
        title: "Développeur Backend Symfony",
        description: "Rejoins une équipe dynamique pour développer des API Rest robustes en Symfony. Projet dans le secteur de la santé.",
        skills: ["php", "symfony", "api_rest", "postgresql"],
        type: "full_time",
        start_date: new Date("2025-09-15"),
        salary: 45000,
        salary_unit: "year",
        password: "symfony2025"
    },
    {
        id: 1,
        title: "Développeur Fullstack React/Node.js",
        description: "Startup tech cherche un profil fullstack pour créer une plateforme SaaS. Stack moderne avec React, Node.js et PostgreSQL.",
        skills: ["react", "node", "javascript", "postgresql"],
        type: "freelance",
        start_date: new Date("2025-10-01"),
        salary: 500,
        salary_unit: "day",
        password: "fullstackRocket"
    },
    {
        id: 2,
        title: "Stagiaire Développement Frontend",
        description: "Stage de 6 mois pour travailler sur des interfaces utilisateurs en React et TypeScript. Encadrement assuré.",
        skills: ["react", "typescript", "javascript"],
        type: "internship",
        start_date: new Date("2025-09-01"),
        salary: 800,
        salary_unit: "month",
        password: "frontendStage"
    },
    {
        id: 3,
        title: "Consultant API Rest & Node.js",
        description: "Mission de consulting pour auditer et améliorer des APIs existantes. Expertise Node.js requise.",
        skills: ["api_rest", "node", "javascript"],
        type: "consulting",
        start_date: new Date("2025-09-20"),
        salary: 700,
        salary_unit: "day",
        password: "nodeAuditX"
    },
    {
        id: 4,
        title: "Développeur PHP à temps partiel",
        description: "Maintenance et évolution d’un site e-commerce sous PHP. Travail à distance possible.",
        skills: ["php", "api_rest"],
        type: "part_time",
        start_date: new Date("2025-09-10"),
        salary: 25,
        salary_unit: "hour",
        password: "phpRemote25"
    },
    {
        id: 5,
        title: "Développeur React freelance",
        description: "Création d’une interface utilisateur pour une application mobile. Mission courte mais intense.",
        skills: ["react", "javascript"],
        type: "freelance",
        start_date: new Date("2025-09-05"),
        salary: 400,
        salary_unit: "day",
        password: "reactSprint"
    },
    {
        id: 6,
        title: "Ingénieur TypeScript full remote",
        description: "Développement d’un outil de monitoring en TypeScript. Collaboration avec une équipe internationale.",
        skills: ["typescript", "node"],
        type: "full_time",
        start_date: new Date("2025-09-15"),
        salary: 55000,
        salary_unit: "year",
        password: "tsGlobalDev"
    },
    {
        id: 7,
        title: "Développeur PHP junior",
        description: "Maintenance d’un site vitrine sous PHP. Idéal pour un profil débutant.",
        skills: ["php"],
        type: "part_time",
        start_date: new Date("2025-09-10"),
        salary: 20,
        salary_unit: "hour",
        password: "phpJunior20"
    },
    {
        id: 8,
        title: "Consultant PostgreSQL",
        description: "Audit et optimisation de bases de données PostgreSQL pour une PME.",
        skills: ["postgresql"],
        type: "consulting",
        start_date: new Date("2025-09-20"),
        salary: 600,
        salary_unit: "day",
        password: "pgExpert"
    },
    {
        id: 9,
        title: "Développeur Node.js pour API Rest",
        description: "Développement d’APIs sécurisées pour une plateforme e-commerce.",
        skills: ["node", "api_rest"],
        type: "full_time",
        start_date: new Date("2025-10-01"),
        salary: 48000,
        salary_unit: "year",
        password: "nodeSecure"
    },
    {
        id: 10,
        title: "Stagiaire React & TypeScript",
        description: "Participation à la refonte d’un dashboard analytique. Stack moderne.",
        skills: ["react", "typescript"],
        type: "internship",
        start_date: new Date("2025-09-01"),
        salary: 900,
        salary_unit: "month",
        password: "reactStage"
    },
    {
        id: 11,
        title: "Développeur Symfony confirmé",
        description: "Refonte d’un backend existant en Symfony 6. Projet dans le secteur bancaire.",
        skills: ["symfony", "php", "api_rest"],
        type: "full_time",
        start_date: new Date("2025-09-18"),
        salary: 52000,
        salary_unit: "year",
        password: "symfonyBank"
    },
    {
        id: 12,
        title: "Développeur JavaScript temps partiel",
        description: "Ajout de fonctionnalités à une application web existante.",
        skills: ["javascript"],
        type: "part_time",
        start_date: new Date("2025-09-12"),
        salary: 30,
        salary_unit: "hour",
        password: "jsPartTime"
    },
    {
        id: 13,
        title: "Architecte API Rest",
        description: "Conception d’une architecture scalable pour des APIs RESTful.",
        skills: ["api_rest", "node", "typescript"],
        type: "consulting",
        start_date: new Date("2025-09-25"),
        salary: 750,
        salary_unit: "day",
        password: "apiArchitect"
    },
    {
        id: 14,
        title: "Développeur React en startup",
        description: "Développement d’un MVP pour une startup dans la foodtech.",
        skills: ["react", "javascript", "node"],
        type: "freelance",
        start_date: new Date("2025-09-08"),
        salary: 450,
        salary_unit: "day",
        password: "reactFood"
    },
    {
        id: 15,
        title: "Développeur PostgreSQL & Node.js",
        description: "Mise en place d’un système de gestion de données pour une plateforme SaaS.",
        skills: ["postgresql", "node"],
        type: "full_time",
        start_date: new Date("2025-09-22"),
        salary: 50000,
        salary_unit: "year",
        password: "pgNodeSaaS"
    },
    {
        id: 16,
        title: "Développeur PHP freelance",
        description: "Ajout de modules à un CMS personnalisé en PHP.",
        skills: ["php"],
        type: "freelance",
        start_date: new Date("2025-09-11"),
        salary: 350,
        salary_unit: "day",
        password: "phpCMS"
    },
    {
        id: 17,
        title: "Développeur Front React",
        description: "Création d’un design system pour une application B2B.",
        skills: ["react", "typescript"],
        type: "full_time",
        start_date: new Date("2025-09-16"),
        salary: 47000,
        salary_unit: "year",
        password: "reactDesign"
    },
    {
        id: 18,
        title: "Développeur Node.js temps partiel",
        description: "Support technique et évolution d’un backend Node.js existant.",
        skills: ["node", "api_rest"],
        type: "part_time",
        start_date: new Date("2025-09-14"),
        salary: 35,
        salary_unit: "hour",
        password: "nodeSupport"
    },
    {
        id: 19,
        title: "Stagiaire PHP & PostgreSQL",
        description: "Développement d’un module de reporting pour une application interne.",
        skills: ["php", "postgresql"],
        type: "internship",
        start_date: new Date("2025-09-01"),
        salary: 850,
        salary_unit: "month",
        password: "phpPgStage"
    },
    {
        id: 20,
        title: "Développeur Symfony freelance",
        description: "Mission courte pour corriger des bugs sur une API Symfony.",
        skills: ["symfony", "php", "api_rest"],
        type: "freelance",
        start_date: new Date("2025-09-07"),
        salary: 400,
        salary_unit: "day",
        password: "symfonyFix"
    },
    {
        id: 21,
        title: "Consultant React senior",
        description: "Accompagnement d’une équipe junior sur un projet React complexe.",
        skills: ["react", "typescript"],
        type: "consulting",
        start_date: new Date("2025-09-19"),
        salary: 800,
        salary_unit: "day",
        password: "reactMentor"
    },
    {
        id: 22,
        title: "Développeur Fullstack JS",
        description: "Développement d’un outil interne en React + Node.js.",
        skills: ["react", "node", "javascript"],
        type: "full_time",
        start_date: new Date("2025-09-23"),
        salary: 51000,
        salary_unit: "year",
        password: "jsToolDev"
    },
    {
        id: 23,
        title: "Développeur PostgreSQL freelance",
        description: "Optimisation de requêtes et indexation pour une base volumineuse.",
        skills: ["postgresql"],
        type: "freelance",
        start_date: new Date("2025-09-06"),
        salary: 500,
        salary_unit: "day",
        password: "pgOptimize"
    },
    {
        id: 24,
        title: "Développeur React temps partiel",
        description: "Ajout de composants dynamiques à une application existante.",
        skills: ["react", "javascript"],
        type: "part_time",
        start_date: new Date("2025-09-13"),
        salary: 28,
        salary_unit: "hour",
        password: "reactPart"
    }
];