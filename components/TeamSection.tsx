import type { TeamMember } from '@/types';

interface TeamSectionProps {
  members: TeamMember[];
}

export default function TeamSection({ members }: TeamSectionProps) {
  if (!members || members.length === 0) return null;

  return (
    <section id="team" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-purple-950/20 to-brand-darker" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">
            Meet the Team
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="gradient-text">The people behind the tabs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We practice what we preach. Here are our tab confessions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => {
            const photo = member.metadata?.photo;

            return (
              <div
                key={member.id}
                className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative w-28 h-28 mx-auto mb-6">
                  {photo ? (
                    <img
                      src={`${photo.imgix_url}?w=256&h=256&fit=crop&auto=format,compress`}
                      alt={member.metadata?.name || member.title}
                      width={112}
                      height={112}
                      className="w-full h-full rounded-full object-cover border-2 border-pink-500/50 group-hover:border-pink-400 transition-colors"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-3xl">
                      👤
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {member.metadata?.name || member.title}
                </h3>
                <p className="text-sm text-pink-400 font-medium mb-3">
                  {member.metadata?.role || 'Team Member'}
                </p>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {member.metadata?.bio || ''}
                </p>

                {member.metadata?.tab_confession && (
                  <div className="glass rounded-xl px-4 py-3 mt-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">
                      Tab Confession 🤫
                    </p>
                    <p className="text-sm text-gray-300 italic">
                      &ldquo;{member.metadata.tab_confession}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}