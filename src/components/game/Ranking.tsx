import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trophy, Medal, User, TrendingUp } from 'lucide-react';

export const Ranking = () => {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();

    const channel = supabase
      .channel('leaderboard_updates')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, () => {
        fetchLeaderboard();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchLeaderboard = async () => {
    const { data, error } = await supabase
      .from('leaderboard')
      .select('*')
      .limit(50);

    if (error) {
      console.error("Error fetching leaderboard:", error);
    } else {
      setLeaderboard(data || []);
    }
    setLoading(false);
  };

  const getRankBadge = (index: number) => {
    switch (index) {
      case 0: return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 1: return <Medal className="w-6 h-6 text-slate-300" />;
      case 2: return <Medal className="w-6 h-6 text-amber-600" />;
      default: return <span className="w-6 text-center font-black text-slate-500">{index + 1}</span>;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {leaderboard.slice(0, 3).map((player, index) => (
          <Card key={player.id} className={`bg-slate-900/80 border-white/10 backdrop-blur-xl relative overflow-hidden ${index === 0 ? 'scale-110 z-10' : ''}`}>
            {index === 0 && <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>}
            <CardHeader className="items-center pb-2">
              <div className="relative">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center border-2 ${index === 0 ? 'border-yellow-400 bg-yellow-400/10' : 'border-slate-700 bg-slate-800'}`}>
                  {player.avatar_url ? (
                    <img src={player.avatar_url} className="w-full h-full rounded-full object-cover" alt="" />
                  ) : (
                    <User className={`w-10 h-10 ${index === 0 ? 'text-yellow-400' : 'text-slate-500'}`} />
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2">
                  {getRankBadge(index)}
                </div>
              </div>
              <CardTitle className="mt-4 text-xl font-black italic">{player.username || 'Herói Anônimo'}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-black text-blue-400">{player.rank_points} pts</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Nível {player.level}</div>
              <div className="flex justify-center gap-4 mt-4">
                <div className="text-center">
                  <div className="text-xs text-green-400 font-black">{player.wins}</div>
                  <div className="text-[8px] text-slate-500 uppercase">Vitórias</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-red-400 font-black">{player.losses}</div>
                  <div className="text-[8px] text-slate-500 uppercase">Derrotas</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-900/60 border-white/10 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-black italic flex items-center gap-2">
            <TrendingUp className="text-blue-400" /> RANKING GLOBAL
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-2">
              {leaderboard.map((player, index) => (
                <div key={player.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 flex justify-center">
                      {getRankBadge(index)}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                      {player.avatar_url ? (
                        <img src={player.avatar_url} className="w-full h-full rounded-full object-cover" alt="" />
                      ) : (
                        <User className="w-6 h-6 text-slate-500" />
                      )}
                    </div>
                    <div>
                      <div className="font-black italic">{player.username || 'Herói Anônimo'}</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Nível {player.level}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-blue-400">{player.rank_points}</div>
                    <div className="text-[10px] text-slate-500 font-bold">PONTOS</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};
