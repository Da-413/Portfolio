import React, { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardHeader, CardContent, MetricCard } from '@/components/ui/Card';
import { Loading } from '@/components/ui/Loading';
import { projects, getProjectBySlug } from '@/data/projects';
import { Project } from '@/types/project';

interface ProjectDetailPageProps {
  project: Project;
}

const ProjectDetailPage: NextPage<ProjectDetailPageProps> = ({ project }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 페이지 로딩 시뮬레이션 (실제로는 이미지 로딩 등에 사용)
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Loading... | AI Portfolio</title>
        </Head>
        <Layout>
          <div className="pt-24 pb-16 px-6">
            <div className="container mx-auto max-w-4xl">
              <Loading variant="data" size="lg" text="Loading project details..." fullScreen />
            </div>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | AI Portfolio</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="article" />
      </Head>

      <Layout>
        <div className="pt-24 pb-16 px-6">
          <div className="container mx-auto max-w-4xl">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <button 
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </button>
            </motion.div>

            {/* Header */}
            <Card variant="elevated" className="mb-8">
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-4 text-white">{project.title}</h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex space-x-3 mt-4 lg:mt-0">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(project.startDate).toLocaleDateString('ko-KR')} - 
                      {project.endDate ? new Date(project.endDate).toLocaleDateString('ko-KR') : '진행중'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Tag className="w-4 h-4" />
                    <span>{project.category.replace('-', ' ').toUpperCase()}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {project.status === 'completed' ? '완료' : '진행중'}
                  </span>
                </div>
              </CardHeader>
            </Card>

            {/* Metrics */}
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">주요 성과</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.metrics.map((metric, index) => (
                  <MetricCard
                    key={metric.label}
                    title={metric.label}
                    value={metric.value}
                    subtitle={metric.description}
                    color={metric.color?.includes('blue') ? 'blue' : 
                           metric.color?.includes('green') ? 'green' : 
                           metric.color?.includes('purple') ? 'purple' : 'blue'}
                    index={index}
                  />
                ))}
              </div>
            </motion.section>

            {/* Technologies */}
            <Card variant="glass" className="mb-8">
              <CardHeader>
                <h2 className="text-2xl font-bold mb-4 text-white">기술 스택</h2>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Description */}
            <Card variant="default" className="mb-8">
              <CardHeader>
                <h2 className="text-2xl font-bold text-white">프로젝트 개요</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card variant="default">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-white">도전 과제</h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded"
                      >
                        <p className="text-gray-300">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card variant="default">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-white">해결 방안</h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <div
                        key={index}
                        className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded"
                      >
                        <p className="text-gray-300">{solution}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <Card variant="elevated" className="mb-8">
              <CardHeader>
                <h2 className="text-2xl font-bold text-white">프로젝트 결과</h2>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded"
                    >
                      <p className="text-gray-300">{result}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card variant="glass" className="text-center">
              <CardContent>
                <h3 className="text-xl font-bold mb-4 text-white">관심이 있으신가요?</h3>
                <p className="text-gray-300 mb-6">
                  이 프로젝트에 대해 더 자세히 알고 싶거나 유사한 프로젝트를 함께 진행하고 싶으시다면 연락해주세요!
                </p>
                <div className="flex justify-center space-x-4">
                  <Link
                    href="/#contact"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Contact Me
                  </Link>
                  <Link
                    href="/#projects"
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    More Projects
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = getProjectBySlug(params?.slug as string);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetailPage;