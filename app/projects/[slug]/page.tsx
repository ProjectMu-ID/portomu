import { notFound } from 'next/navigation'
import Image from 'next/image'
import { projects } from '../data'

type Props = {
    params: Promise<{
        slug: string
    }>
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params

    const project = projects.find((p) => p.slug === slug)

    if (!project) return notFound()

    return (
        <main className="min-h-screen bg-[#252525] px-4 py-20">
            <div className="max-w-4xl mx-auto">
                {/* Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-10">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content */}
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                    {project.title}
                </h1>

                <p className="text-gray-400 mt-2">
                    {project.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-200"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <div className="mt-8 text-gray-300 leading-relaxed whitespace-pre-line">
                    {project.content}
                </div>
            </div>
        </main>
    )
}
