export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      activity_logs: {
        Row: {
          action: string
          created_at: string | null
          duration_seconds: number | null
          id: string
          metadata: Json | null
          page: string | null
          path: string | null
          session_id: string | null
          user_email: string | null
          user_id: string
          user_name: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          duration_seconds?: number | null
          id?: string
          metadata?: Json | null
          page?: string | null
          path?: string | null
          session_id?: string | null
          user_email?: string | null
          user_id: string
          user_name?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          duration_seconds?: number | null
          id?: string
          metadata?: Json | null
          page?: string | null
          path?: string | null
          session_id?: string | null
          user_email?: string | null
          user_id?: string
          user_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      app_blueprints: {
        Row: {
          app_name: string | null
          created_at: string
          entities: Json
          exported_at: string | null
          id: string
          pages: Json
          raw: Json | null
          user_id: string
          version: string | null
        }
        Insert: {
          app_name?: string | null
          created_at?: string
          entities?: Json
          exported_at?: string | null
          id?: string
          pages?: Json
          raw?: Json | null
          user_id: string
          version?: string | null
        }
        Update: {
          app_name?: string | null
          created_at?: string
          entities?: Json
          exported_at?: string | null
          id?: string
          pages?: Json
          raw?: Json | null
          user_id?: string
          version?: string | null
        }
        Relationships: []
      }
      chem_questions: {
        Row: {
          answer_text: string | null
          area: Database["public"]["Enums"]["chem_area"]
          class_id: string | null
          correct_index: number
          created_at: string
          created_by: string | null
          difficulty: number
          explanation: string | null
          grade_year: number | null
          id: string
          options: Json
          question: string
          school_level: string
          topic: string | null
          updated_at: string
        }
        Insert: {
          answer_text?: string | null
          area: Database["public"]["Enums"]["chem_area"]
          class_id?: string | null
          correct_index?: number
          created_at?: string
          created_by?: string | null
          difficulty?: number
          explanation?: string | null
          grade_year?: number | null
          id?: string
          options?: Json
          question: string
          school_level?: string
          topic?: string | null
          updated_at?: string
        }
        Update: {
          answer_text?: string | null
          area?: Database["public"]["Enums"]["chem_area"]
          class_id?: string | null
          correct_index?: number
          created_at?: string
          created_by?: string | null
          difficulty?: number
          explanation?: string | null
          grade_year?: number | null
          id?: string
          options?: Json
          question?: string
          school_level?: string
          topic?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "chem_questions_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      chem_terms: {
        Row: {
          area: Database["public"]["Enums"]["chem_area"]
          clue: string
          created_at: string
          created_by: string | null
          difficulty: number
          id: string
          school_level: string
          term: string
        }
        Insert: {
          area: Database["public"]["Enums"]["chem_area"]
          clue: string
          created_at?: string
          created_by?: string | null
          difficulty?: number
          id?: string
          school_level?: string
          term: string
        }
        Update: {
          area?: Database["public"]["Enums"]["chem_area"]
          clue?: string
          created_at?: string
          created_by?: string | null
          difficulty?: number
          id?: string
          school_level?: string
          term?: string
        }
        Relationships: []
      }
      class_members: {
        Row: {
          class_id: string
          joined_at: string
          role: string
          status: string
          user_id: string
        }
        Insert: {
          class_id: string
          joined_at?: string
          role?: string
          status?: string
          user_id: string
        }
        Update: {
          class_id?: string
          joined_at?: string
          role?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "class_members_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      class_team_members: {
        Row: {
          team_id: string
          user_id: string
        }
        Insert: {
          team_id: string
          user_id: string
        }
        Update: {
          team_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "class_team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "class_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      class_teams: {
        Row: {
          class_id: string
          color: string | null
          created_at: string
          id: string
          name: string
        }
        Insert: {
          class_id: string
          color?: string | null
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          class_id?: string
          color?: string | null
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "class_teams_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      classes: {
        Row: {
          created_at: string
          grade_year: number
          id: string
          invite_code: string
          name: string
          school_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          grade_year: number
          id?: string
          invite_code?: string
          name: string
          school_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          grade_year?: number
          id?: string
          invite_code?: string
          name?: string
          school_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "classes_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      credit_grants: {
        Row: {
          amount: number
          created_at: string
          granted_by: string
          id: string
          reason: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          granted_by: string
          id?: string
          reason?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          granted_by?: string
          id?: string
          reason?: string | null
          user_id?: string
        }
        Relationships: []
      }
      credit_promotions: {
        Row: {
          active: boolean
          bonus_pct: number
          class_id: string | null
          created_at: string
          created_by: string
          ends_at: string
          id: string
          name: string
          starts_at: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          bonus_pct?: number
          class_id?: string | null
          created_at?: string
          created_by: string
          ends_at: string
          id?: string
          name: string
          starts_at: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          bonus_pct?: number
          class_id?: string | null
          created_at?: string
          created_by?: string
          ends_at?: string
          id?: string
          name?: string
          starts_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "credit_promotions_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      economy_settings: {
        Row: {
          action_key: string
          cost: number
          id: string
          label: string
          updated_at: string
        }
        Insert: {
          action_key: string
          cost?: number
          id?: string
          label: string
          updated_at?: string
        }
        Update: {
          action_key?: string
          cost?: number
          id?: string
          label?: string
          updated_at?: string
        }
        Relationships: []
      }
      elements: {
        Row: {
          attributes: Json
          created_at: string
          hero_description: string | null
          hero_image: string | null
          hero_name: string | null
          name: string
          number: number
          rarity: string | null
          symbol: string
          updated_at: string
        }
        Insert: {
          attributes?: Json
          created_at?: string
          hero_description?: string | null
          hero_image?: string | null
          hero_name?: string | null
          name: string
          number: number
          rarity?: string | null
          symbol: string
          updated_at?: string
        }
        Update: {
          attributes?: Json
          created_at?: string
          hero_description?: string | null
          hero_image?: string | null
          hero_name?: string | null
          name?: string
          number?: number
          rarity?: string | null
          symbol?: string
          updated_at?: string
        }
        Relationships: []
      }
      game_sessions: {
        Row: {
          area: Database["public"]["Enums"]["chem_area"]
          code: string
          created_at: string
          current_question_id: string | null
          current_round: number
          id: string
          mode: Database["public"]["Enums"]["game_mode"]
          settings: Json
          status: Database["public"]["Enums"]["session_status"]
          teacher_id: string | null
          total_rounds: number
          updated_at: string
        }
        Insert: {
          area?: Database["public"]["Enums"]["chem_area"]
          code: string
          created_at?: string
          current_question_id?: string | null
          current_round?: number
          id?: string
          mode?: Database["public"]["Enums"]["game_mode"]
          settings?: Json
          status?: Database["public"]["Enums"]["session_status"]
          teacher_id?: string | null
          total_rounds?: number
          updated_at?: string
        }
        Update: {
          area?: Database["public"]["Enums"]["chem_area"]
          code?: string
          created_at?: string
          current_question_id?: string | null
          current_round?: number
          id?: string
          mode?: Database["public"]["Enums"]["game_mode"]
          settings?: Json
          status?: Database["public"]["Enums"]["session_status"]
          teacher_id?: string | null
          total_rounds?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "game_sessions_current_question_id_fkey"
            columns: ["current_question_id"]
            isOneToOne: false
            referencedRelation: "chem_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      game_teams: {
        Row: {
          color: string
          created_at: string
          id: string
          name: string
          score: number
          session_id: string
        }
        Insert: {
          color?: string
          created_at?: string
          id?: string
          name: string
          score?: number
          session_id: string
        }
        Update: {
          color?: string
          created_at?: string
          id?: string
          name?: string
          score?: number
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "game_teams_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "game_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_plans: {
        Row: {
          class_id: string | null
          content: string
          created_at: string
          grade_year: number | null
          id: string
          subject: string | null
          teacher_id: string
          title: string
          updated_at: string
        }
        Insert: {
          class_id?: string | null
          content: string
          created_at?: string
          grade_year?: number | null
          id?: string
          subject?: string | null
          teacher_id: string
          title: string
          updated_at?: string
        }
        Update: {
          class_id?: string | null
          content?: string
          created_at?: string
          grade_year?: number | null
          id?: string
          subject?: string | null
          teacher_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_plans_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      match_moves: {
        Row: {
          attribute_selected: string
          card_symbol: string
          created_at: string
          id: string
          match_id: string
          player_id: string
          round_number: number
        }
        Insert: {
          attribute_selected: string
          card_symbol: string
          created_at?: string
          id?: string
          match_id: string
          player_id: string
          round_number: number
        }
        Update: {
          attribute_selected?: string
          card_symbol?: string
          created_at?: string
          id?: string
          match_id?: string
          player_id?: string
          round_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "match_moves_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_moves_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_moves_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      matches: {
        Row: {
          created_at: string
          current_round: number | null
          current_turn: string | null
          id: string
          match_type: string | null
          player1_id: string
          player2_id: string | null
          room_code: string | null
          status: string
          total_rounds: number | null
          updated_at: string
          winner_id: string | null
        }
        Insert: {
          created_at?: string
          current_round?: number | null
          current_turn?: string | null
          id?: string
          match_type?: string | null
          player1_id: string
          player2_id?: string | null
          room_code?: string | null
          status?: string
          total_rounds?: number | null
          updated_at?: string
          winner_id?: string | null
        }
        Update: {
          created_at?: string
          current_round?: number | null
          current_turn?: string | null
          id?: string
          match_type?: string | null
          player1_id?: string
          player2_id?: string | null
          room_code?: string | null
          status?: string
          total_rounds?: number | null
          updated_at?: string
          winner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_current_turn_fkey"
            columns: ["current_turn"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_current_turn_fkey"
            columns: ["current_turn"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_player1_id_fkey"
            columns: ["player1_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_player1_id_fkey"
            columns: ["player1_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_player2_id_fkey"
            columns: ["player2_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_player2_id_fkey"
            columns: ["player2_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      player_avatars: {
        Row: {
          accessories: string[] | null
          appearance: Json
          avatar_url: string | null
          background: string
          body_type: string | null
          current_card: string
          equipped: Json
          gender: string | null
          generated_url: string | null
          hair_color: string | null
          hair_style: string | null
          outfit: string | null
          photo_url: string | null
          skin: string
          skin_tone: string | null
          total_earnings: number
          unlocked: string[]
          unlocked_cards: string[]
          unlocked_items: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          accessories?: string[] | null
          appearance?: Json
          avatar_url?: string | null
          background?: string
          body_type?: string | null
          current_card?: string
          equipped?: Json
          gender?: string | null
          generated_url?: string | null
          hair_color?: string | null
          hair_style?: string | null
          outfit?: string | null
          photo_url?: string | null
          skin?: string
          skin_tone?: string | null
          total_earnings?: number
          unlocked?: string[]
          unlocked_cards?: string[]
          unlocked_items?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          accessories?: string[] | null
          appearance?: Json
          avatar_url?: string | null
          background?: string
          body_type?: string | null
          current_card?: string
          equipped?: Json
          gender?: string | null
          generated_url?: string | null
          hair_color?: string | null
          hair_style?: string | null
          outfit?: string | null
          photo_url?: string | null
          skin?: string
          skin_tone?: string | null
          total_earnings?: number
          unlocked?: string[]
          unlocked_cards?: string[]
          unlocked_items?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      player_stats: {
        Row: {
          avatar_url: string | null
          best_win_streak: number
          created_at: string
          display_name: string | null
          favorite_element: string | null
          ranking_points: number
          total_draws: number
          total_games: number
          total_losses: number
          total_wins: number
          updated_at: string
          user_id: string
          win_streak: number
        }
        Insert: {
          avatar_url?: string | null
          best_win_streak?: number
          created_at?: string
          display_name?: string | null
          favorite_element?: string | null
          ranking_points?: number
          total_draws?: number
          total_games?: number
          total_losses?: number
          total_wins?: number
          updated_at?: string
          user_id: string
          win_streak?: number
        }
        Update: {
          avatar_url?: string | null
          best_win_streak?: number
          created_at?: string
          display_name?: string | null
          favorite_element?: string | null
          ranking_points?: number
          total_draws?: number
          total_games?: number
          total_losses?: number
          total_wins?: number
          updated_at?: string
          user_id?: string
          win_streak?: number
        }
        Relationships: []
      }
      player_wallet: {
        Row: {
          coins: number
          lifetime_coins: number
          updated_at: string
          user_id: string
        }
        Insert: {
          coins?: number
          lifetime_coins?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          coins?: number
          lifetime_coins?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          access_code: string | null
          avatar_url: string | null
          created_at: string
          email: string | null
          guardian_email: string | null
          guardian_name: string | null
          guardian_phone: string | null
          guardian_relationship: string | null
          id: string
          level: number | null
          losses: number | null
          rank_points: number | null
          streak: number | null
          updated_at: string
          username: string | null
          wins: number | null
          xp: number | null
        }
        Insert: {
          access_code?: string | null
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          guardian_email?: string | null
          guardian_name?: string | null
          guardian_phone?: string | null
          guardian_relationship?: string | null
          id: string
          level?: number | null
          losses?: number | null
          rank_points?: number | null
          streak?: number | null
          updated_at?: string
          username?: string | null
          wins?: number | null
          xp?: number | null
        }
        Update: {
          access_code?: string | null
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          guardian_email?: string | null
          guardian_name?: string | null
          guardian_phone?: string | null
          guardian_relationship?: string | null
          id?: string
          level?: number | null
          losses?: number | null
          rank_points?: number | null
          streak?: number | null
          updated_at?: string
          username?: string | null
          wins?: number | null
          xp?: number | null
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          can_edit: boolean
          can_view: boolean
          created_at: string
          feature_key: string
          feature_label: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
        }
        Insert: {
          can_edit?: boolean
          can_view?: boolean
          created_at?: string
          feature_key: string
          feature_label: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at?: string
        }
        Update: {
          can_edit?: boolean
          can_view?: boolean
          created_at?: string
          feature_key?: string
          feature_label?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
        }
        Relationships: []
      }
      schools: {
        Row: {
          city: string | null
          created_at: string
          id: string
          name: string
          owner_id: string
          updated_at: string
        }
        Insert: {
          city?: string | null
          created_at?: string
          id?: string
          name: string
          owner_id: string
          updated_at?: string
        }
        Update: {
          city?: string | null
          created_at?: string
          id?: string
          name?: string
          owner_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      session_answers: {
        Row: {
          answer: Json
          created_at: string
          id: string
          is_correct: boolean
          points: number
          question_id: string | null
          round_number: number
          session_id: string
          team_id: string
        }
        Insert: {
          answer: Json
          created_at?: string
          id?: string
          is_correct?: boolean
          points?: number
          question_id?: string | null
          round_number: number
          session_id: string
          team_id: string
        }
        Update: {
          answer?: Json
          created_at?: string
          id?: string
          is_correct?: boolean
          points?: number
          question_id?: string | null
          round_number?: number
          session_id?: string
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "chem_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_answers_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "game_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_answers_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "game_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          display_name: string
          id: string
          joined_at: string
          team_id: string
        }
        Insert: {
          display_name: string
          id?: string
          joined_at?: string
          team_id: string
        }
        Update: {
          display_name?: string
          id?: string
          joined_at?: string
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "game_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      user_collection: {
        Row: {
          acquired_at: string
          element_symbol: string
          id: string
          user_id: string
        }
        Insert: {
          acquired_at?: string
          element_symbol: string
          id?: string
          user_id: string
        }
        Update: {
          acquired_at?: string
          element_symbol?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_collection_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_collection_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      leaderboard: {
        Row: {
          avatar_url: string | null
          id: string | null
          level: number | null
          losses: number | null
          rank_points: number | null
          username: string | null
          wins: number | null
        }
        Insert: {
          avatar_url?: string | null
          id?: string | null
          level?: number | null
          losses?: number | null
          rank_points?: number | null
          username?: string | null
          wins?: number | null
        }
        Update: {
          avatar_url?: string | null
          id?: string | null
          level?: number | null
          losses?: number | null
          rank_points?: number | null
          username?: string | null
          wins?: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      approve_class_member: {
        Args: { _approve: boolean; _class_id: string; _user_id: string }
        Returns: undefined
      }
      current_credit_bonus: { Args: { _user_id: string }; Returns: number }
      ensure_current_user_access: {
        Args: never
        Returns: {
          role: Database["public"]["Enums"]["app_role"]
        }[]
      }
      generate_access_code: { Args: { _user_id: string }; Returns: string }
      get_my_permissions: {
        Args: never
        Returns: {
          can_edit: boolean
          can_view: boolean
          feature_key: string
          feature_label: string
        }[]
      }
      grant_coins_to_user: {
        Args: { _amount: number; _reason: string; _user_id: string }
        Returns: number
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      history_by_access_code: {
        Args: { _code: string }
        Returns: {
          coins: number
          level: number
          lifetime_coins: number
          username: string
          xp: number
        }[]
      }
      join_class_by_code: { Args: { _code: string }; Returns: string }
      lookup_user_ids_by_emails: {
        Args: { _emails: string[] }
        Returns: {
          email: string
          user_id: string
        }[]
      }
    }
    Enums: {
      app_role:
        | "admin"
        | "moderator"
        | "user"
        | "student"
        | "teacher"
        | "coordinator"
        | "director"
        | "parent"
      chem_area:
        | "organica"
        | "inorganica"
        | "geral"
        | "ambiental"
        | "farmacologia"
      game_mode: "quiz" | "forca" | "caca_palavras" | "cruzada" | "memoria"
      session_status: "lobby" | "active" | "paused" | "finished"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "admin",
        "moderator",
        "user",
        "student",
        "teacher",
        "coordinator",
        "director",
        "parent",
      ],
      chem_area: [
        "organica",
        "inorganica",
        "geral",
        "ambiental",
        "farmacologia",
      ],
      game_mode: ["quiz", "forca", "caca_palavras", "cruzada", "memoria"],
      session_status: ["lobby", "active", "paused", "finished"],
    },
  },
} as const
