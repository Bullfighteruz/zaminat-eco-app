import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Vote, 
  Heart, 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign, 
  Trophy,
  Target,
  CheckCircle,
  TrendingUp,
  Clock,
  Award,
  Sparkles,
  Eye,
  Share2,
  Download,
  BarChart3,
  Zap,
  Star,
  Camera,
  Play,
  Pause,
  Recycle
} from 'lucide-react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { votingProjects } from '../lib/mockData';
import { useTranslation } from '../hooks/useTranslation';

// Types for completed projects
interface TimelineItem {
  date: string;
  event: string;
  votes?: number;
  amount?: string;
}

interface CompletedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  completedDate: Date;
  materialsUsed: number;
  beneficiaries: number;
  impact: string;
  co2Saved: number;
  treesEquivalent: number;
  beforeAfter: {
    before: string;
    after: string;
  };
  timeline: TimelineItem[];
  gallery: string[];
  satisfaction: number;
  views: number;
  shares: number;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function EcoVote() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('active');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState({});

  const formatCurrency = (amount: number) => {
    return `${(amount / 1000000).toFixed(1)}M ${t('currency')}`;
  };

  // Translate voting projects
  const translatedProjects = votingProjects.map(project => ({
    ...project,
    title: project.id === '1' ? t('newPlaygroundTitle') : project.title,
    description: project.id === '1' ? t('playgroundDescription') : project.description,
    location: project.location === 'Chilonzor District' ? t('chilonzorDistrict') : project.location,
    category: project.category === 'school' ? t('school') : project.category
  }));

  const activeProjects = translatedProjects.filter(p => p.status === 'active');
  
  const completedProjects: CompletedProject[] = [
    {
      id: 'completed-1',
      title: t('ecoPlaygroundAtSchool12'),
      description: t('ecoPlaygroundDescription'),
      image: '🎪',
      location: t('shaykhantaurDistrict'),
      completedDate: new Date('2025-08-15'),
      materialsUsed: 1800,
      beneficiaries: 450,
      impact: 'High',
      co2Saved: 2.4,
      treesEquivalent: 120,
      beforeAfter: {
        before: '🏚️',
        after: '🎪'
      },
      timeline: [
        { date: '2025-06-01', event: t('projectApproved'), votes: 1250 },
        { date: '2025-06-15', event: t('fundingComplete'), amount: '2.1M' },
        { date: '2025-07-01', event: t('constructionStarted') },
        { date: '2025-08-15', event: t('projectCompleted') }
      ],
      gallery: ['🏗️', '🚧', '👷', '🎪'],
      satisfaction: 96,
      views: 15420,
      shares: 234
    },
    {
      id: 'completed-2',
      title: t('communityGardenBenches'),
      description: t('communityBenchesDescription'),
      image: '🪑',
      location: t('alisherNavoiPark'),
      completedDate: new Date('2025-07-22'),
      materialsUsed: 960,
      beneficiaries: 200,
      impact: 'Medium',
      co2Saved: 1.2,
      treesEquivalent: 60,
      beforeAfter: {
        before: '🌳',
        after: '🪑'
      },
      timeline: [
        { date: '2025-05-10', event: t('projectApproved'), votes: 890 },
        { date: '2025-05-25', event: t('fundingComplete'), amount: '1.2M' },
        { date: '2025-06-10', event: t('installationStarted') },
        { date: '2025-07-22', event: t('projectCompleted') }
      ],
      gallery: ['🔧', '🪑', '🌳', '👨‍👩‍👧‍👦'],
      satisfaction: 89,
      views: 8930,
      shares: 156
    }
  ];

  const CompletedProjectCard = ({ project }: { project: CompletedProject }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showImpactAnimation, setShowImpactAnimation] = useState(false);

    const handleImageCycle = () => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
        setIsAnimating(false);
      }, 300);
    };

    const triggerImpactAnimation = () => {
      setShowImpactAnimation(true);
      setTimeout(() => setShowImpactAnimation(false), 1000);
    };

    return (
      <motion.div
        variants={itemVariants}
        whileHover="hover"
        layout
      >
        <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-green-400 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: i * 0.5 }}
              />
            ))}
          </div>

          <CardContent className="p-6 relative z-10">
            <div className="flex items-start space-x-4">
              {/* Interactive Image Gallery */}
              <div className="relative">
                <motion.div 
                  className="text-4xl p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl cursor-pointer border-2 border-green-200 hover:border-green-400 transition-all duration-300"
                  onClick={handleImageCycle}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  animate={isAnimating ? { rotateY: 180 } : { rotateY: 0 }}
                >
                  {project.gallery[currentImageIndex]}
                </motion.div>
                
                {/* Image counter */}
                <div className="absolute -bottom-2 -right-2 bg-green-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
                  {currentImageIndex + 1}
                </div>
                
                {/* Camera hint */}
                <motion.div
                  className="absolute -top-2 -left-2 bg-yellow-400 text-yellow-800 text-xs px-2 py-1 rounded-full shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Camera className="h-3 w-3" />
                </motion.div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-green-800 text-xl mb-2 flex items-center">
                      {project.title}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="ml-2"
                      >
                        <Sparkles className="h-5 w-5 text-yellow-500" />
                      </motion.div>
                    </h4>
                    
                    {/* Completion badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {t('completedWithSparkles')}
                      </Badge>
                    </motion.div>
                  </div>
                  
                  {/* Expand/Collapse button */}
                  <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-2 bg-green-100 hover:bg-green-200 rounded-full transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Eye className="h-4 w-4 text-green-600" />
                    </motion.div>
                  </motion.button>
                </div>
                
                <p className="text-green-700 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact metrics grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  {/* Location */}
                  <motion.div 
                    className="flex items-center text-green-600 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-3 cursor-pointer"
                    whileHover={{ scale: 1.05, backgroundColor: "#dcfce7" }}
                    onClick={triggerImpactAnimation}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="font-medium">{project.location}</span>
                  </motion.div>

                  {/* Materials used */}
                  <motion.div 
                    className="flex items-center text-green-600 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-3 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={triggerImpactAnimation}
                  >
                    <Recycle className="h-4 w-4 mr-2" />
                    <motion.span 
                      className="font-medium"
                      animate={showImpactAnimation ? { scale: [1, 1.2, 1], color: "#059669" } : {}}
                    >
                      {project.materialsUsed}kg {t('materialsUsedAmount')}
                    </motion.span>
                  </motion.div>

                  {/* People benefited */}
                  <motion.div 
                    className="flex items-center text-green-600 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-3 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={triggerImpactAnimation}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    <motion.span 
                      className="font-medium"
                      animate={showImpactAnimation ? { scale: [1, 1.2, 1], color: "#059669" } : {}}
                    >
                      {project.beneficiaries} {t('peopleBenefitedAmount')}
                    </motion.span>
                  </motion.div>
                </div>

                {/* Expandable details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 p-4 bg-white rounded-lg border border-green-200"
                    >
                      <h5 className="font-semibold text-green-800 mb-3">
                        {t('projectTimeline')}
                      </h5>
                      <div className="space-y-2">
                        {project.timeline.map((item: TimelineItem, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                            <div className="flex-1">
                              <div className="text-sm font-medium">{item.event}</div>
                              <div className="text-xs text-gray-600">{item.date}</div>
                            </div>
                            {item.votes && (
                              <Badge variant="outline" className="text-xs">
                                {item.votes} {t('votes')}
                              </Badge>
                            )}
                            {item.amount && (
                              <Badge variant="outline" className="text-xs bg-green-50">
                                {item.amount}
                              </Badge>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <Layout title={t('ecoVote')}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-12 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl font-bold mb-4"
            >
              {t('democraticVoting')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto"
            >
              {t('votingDescription')}
            </motion.p>
            
            {/* Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xl md:text-2xl font-bold">2,847</div>
                <div className="text-xs md:text-sm text-blue-100">Total Votes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xl md:text-2xl font-bold">6</div>
                <div className="text-xs md:text-sm text-blue-100">{t('activeProjects')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xl md:text-2xl font-bold">12</div>
                <div className="text-xs md:text-sm text-blue-100">{t('completed')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xl md:text-2xl font-bold">4.2M</div>
                <div className="text-xs md:text-sm text-blue-100">Materials Recycled</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="p-4 space-y-6 max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <Card className="p-2 bg-white/80 backdrop-blur-sm">
              <div className="flex gap-2">
                <Button
                  variant={activeTab === 'active' ? 'default' : 'outline'}
                  onClick={() => setActiveTab('active')}
                  className={`text-sm ${activeTab === 'active' ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                >
                  <Vote className="h-4 w-4 mr-2" />
                  {t('activeProjects')}
                </Button>
                <Button
                  variant={activeTab === 'completed' ? 'default' : 'outline'}
                  onClick={() => setActiveTab('completed')}
                  className={`text-sm ${activeTab === 'completed' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                >
                  <Trophy className="h-4 w-4 mr-2" />
                  {t('successStories')}
                </Button>
              </div>
            </Card>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === 'active' && (
              <motion.div
                key="active"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-4"
              >
                {/* Active Voting Projects */}
                {activeProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <Card className="overflow-hidden bg-gradient-to-r from-white to-blue-50/30 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <CardHeader className="pb-3">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex items-start space-x-3">
                            <div className="relative">
                              <span className="text-3xl md:text-4xl">{project.image}</span>
                              <div className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                                {index + 1}
                              </div>
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg md:text-xl mb-2">
                                {project.title}
                              </CardTitle>
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200">
                                  {project.category}
                                </Badge>
                                <span className="text-sm text-gray-600 flex items-center">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {project.location}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Vote Count - Mobile Optimized */}
                          <div className="text-center md:text-right bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-3 min-w-[120px]">
                            <div className="text-2xl md:text-3xl font-bold">
                              {project.currentVotes.toLocaleString()}
                            </div>
                            <div className="text-xs opacity-90">{t('votes')}</div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Progress Bars */}
                        <div className="space-y-3">
                          {/* Voting Progress */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                              <span className="flex items-center">
                                <Trophy className="h-4 w-4 mr-1 text-blue-600" />
                                {t('communitySupport')}
                              </span>
                              <span className="text-blue-600 font-bold">
                                {((project.currentVotes / project.totalVotes) * 100).toFixed(1)}%
                              </span>
                            </div>
                            <Progress 
                              value={(project.currentVotes / project.totalVotes) * 100} 
                              className="h-3 bg-blue-100"
                            />
                          </div>

                          {/* Donation Progress */}
                          {project.donationTarget && project.donationRaised && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm font-medium">
                                <span className="flex items-center">
                                  <Target className="h-4 w-4 mr-1 text-green-600" />
                                  {t('fundingProgress')}
                                </span>
                                <span className="text-green-600 font-bold">
                                  {formatCurrency(project.donationRaised)} / {formatCurrency(project.donationTarget)}
                                </span>
                              </div>
                              <Progress 
                                value={(project.donationRaised / project.donationTarget) * 100} 
                                className="h-3 bg-green-100"
                              />
                              <div className="text-xs text-gray-500 text-right">
                                {((project.donationRaised / project.donationTarget) * 100).toFixed(1)}% {t('funded')}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Project Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-2">
                            <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                            <span>{t('deadline')}: {project.deadline.toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-2">
                            <Users className="h-4 w-4 mr-2 text-purple-500" />
                            <span>{project.requiredMaterials}kg {t('materialsNeeded')}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <motion.div 
                            whileHover={{ scale: 1.02 }} 
                            whileTap={{ scale: 0.98 }}
                            className="flex-1"
                          >
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                              <Vote className="h-4 w-4 mr-2" />
                              {t('voteNow')}
                            </Button>
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.02 }} 
                            whileTap={{ scale: 0.98 }}
                            className="flex-1"
                          >
                            <Button variant="outline" className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                              <DollarSign className="h-4 w-4 mr-2" />
                              {t('donate')}
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'completed' && (
              <motion.div
                key="completed"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-6"
              >
                {/* Success Stories Header */}
                <motion.div 
                  variants={itemVariants}
                  className="text-center py-8 bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 rounded-2xl"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="inline-block mb-4"
                  >
                    <Trophy className="h-12 w-12 text-green-600" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">{t('successStories')}</h2>
                  <p className="text-green-700 max-w-2xl mx-auto">
                    {t('exploreCompletedProjects')}
                  </p>
                </motion.div>

                {/* Completed Projects with Advanced Interactions */}
                <div className="space-y-8">
                  {completedProjects.map((project) => (
                    <CompletedProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* How It Works Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 text-xl md:text-2xl flex items-center">
                  <Clock className="h-6 w-6 mr-2" />
                  {t('howVotingWorks')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { step: 1, text: t('votingStep1'), icon: Vote, color: 'blue' },
                    { step: 2, text: t('votingStep2'), icon: Users, color: 'purple' },
                    { step: 3, text: t('votingStep3'), icon: Trophy, color: 'green' },
                    { step: 4, text: t('votingStep4'), icon: Target, color: 'orange' },
                    { step: 5, text: t('votingStep5'), icon: CheckCircle, color: 'emerald' }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`p-4 bg-white rounded-lg shadow-sm border-l-4 border-${item.color}-500`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-8 h-8 bg-${item.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className={`h-4 w-4 text-${item.color}-600`} />
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white border-0 overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('makeVoiceHeard')}</h3>
                  <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
                    {t('everyVoteHelps')}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 shadow-xl">
                      <Vote className="h-5 w-5 mr-2" />
                      {t('viewAllProjects')}
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}