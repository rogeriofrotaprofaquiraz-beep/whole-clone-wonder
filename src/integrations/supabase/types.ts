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
      access_code_sends: {
        Row: {
          access_code: string
          channel: string
          created_at: string
          id: string
          note: string | null
          recipient: string
          sent_by: string
          user_id: string
        }
        Insert: {
          access_code: string
          channel: string
          created_at?: string
          id?: string
          note?: string | null
          recipient: string
          sent_by: string
          user_id: string
        }
        Update: {
          access_code?: string
          channel?: string
          created_at?: string
          id?: string
          note?: string | null
          recipient?: string
          sent_by?: string
          user_id?: string
        }
        Relationships: []
      }
      access_profiles: {
        Row: {
          base_role: Database["public"]["Enums"]["app_role"]
          builtin: boolean
          class_id: string | null
          created_at: string
          created_by: string | null
          id: string
          name: string
        }
        Insert: {
          base_role?: Database["public"]["Enums"]["app_role"]
          builtin?: boolean
          class_id?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          name: string
        }
        Update: {
          base_role?: Database["public"]["Enums"]["app_role"]
          builtin?: boolean
          class_id?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "access_profiles_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      access_rules: {
        Row: {
          allowed: boolean
          class_id: string | null
          feature_key: string
          id: string
          profile_id: string | null
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
          updated_by: string | null
          user_id: string | null
        }
        Insert: {
          allowed?: boolean
          class_id?: string | null
          feature_key: string
          id?: string
          profile_id?: string | null
          role: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          updated_by?: string | null
          user_id?: string | null
        }
        Update: {
          allowed?: boolean
          class_id?: string | null
          feature_key?: string
          id?: string
          profile_id?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          updated_by?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "access_rules_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "access_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
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
      appearance_prices: {
        Row: {
          category: string
          option_value: string
          price: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          category: string
          option_value: string
          price?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          category?: string
          option_value?: string
          price?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      assessment_attempts: {
        Row: {
          answers: Json
          assessment_id: string | null
          correct_count: number
          course_id: string
          created_at: string
          id: string
          passed: boolean
          score: number
          total_questions: number
          user_id: string
        }
        Insert: {
          answers?: Json
          assessment_id?: string | null
          correct_count?: number
          course_id: string
          created_at?: string
          id?: string
          passed?: boolean
          score?: number
          total_questions?: number
          user_id: string
        }
        Update: {
          answers?: Json
          assessment_id?: string | null
          correct_count?: number
          course_id?: string
          created_at?: string
          id?: string
          passed?: boolean
          score?: number
          total_questions?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "assessment_attempts_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "course_assessments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assessment_attempts_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      certificates: {
        Row: {
          code: string
          course_id: string
          course_title: string
          hours: number
          id: string
          issued_at: string
          score: number
          student_name: string
          user_id: string
        }
        Insert: {
          code: string
          course_id: string
          course_title: string
          hours: number
          id?: string
          issued_at?: string
          score: number
          student_name: string
          user_id: string
        }
        Update: {
          code?: string
          course_id?: string
          course_title?: string
          hours?: number
          id?: string
          issued_at?: string
          score?: number
          student_name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "certificates_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      checklist_checks: {
        Row: {
          checked_by: string | null
          created_at: string
          item_key: string
          target_id: string
        }
        Insert: {
          checked_by?: string | null
          created_at?: string
          item_key: string
          target_id: string
        }
        Update: {
          checked_by?: string | null
          created_at?: string
          item_key?: string
          target_id?: string
        }
        Relationships: []
      }
      checklist_config: {
        Row: {
          items: Json
          scope: string
          updated_at: string
        }
        Insert: {
          items?: Json
          scope: string
          updated_at?: string
        }
        Update: {
          items?: Json
          scope?: string
          updated_at?: string
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
          discipline: string | null
          explanation: string | null
          extra: Json | null
          games: string[]
          grade_year: number | null
          hint: string | null
          id: string
          image_url: string | null
          lesson: string | null
          options: Json
          qtype: string
          question: string
          school_level: string
          school_levels: string[]
          slide_content: string | null
          subcategory: string | null
          time_limit: number
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
          discipline?: string | null
          explanation?: string | null
          extra?: Json | null
          games?: string[]
          grade_year?: number | null
          hint?: string | null
          id?: string
          image_url?: string | null
          lesson?: string | null
          options?: Json
          qtype?: string
          question: string
          school_level?: string
          school_levels?: string[]
          slide_content?: string | null
          subcategory?: string | null
          time_limit?: number
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
          discipline?: string | null
          explanation?: string | null
          extra?: Json | null
          games?: string[]
          grade_year?: number | null
          hint?: string | null
          id?: string
          image_url?: string | null
          lesson?: string | null
          options?: Json
          qtype?: string
          question?: string
          school_level?: string
          school_levels?: string[]
          slide_content?: string | null
          subcategory?: string | null
          time_limit?: number
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
          profile_id: string | null
          role: string
          status: string
          user_id: string
        }
        Insert: {
          class_id: string
          joined_at?: string
          profile_id?: string | null
          role?: string
          status?: string
          user_id: string
        }
        Update: {
          class_id?: string
          joined_at?: string
          profile_id?: string | null
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
          {
            foreignKeyName: "class_members_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "access_profiles"
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
      course_assessments: {
        Row: {
          course_id: string
          created_at: string
          id: string
          passing_score: number
          question_bank: Json
          questions: Json
          questions_per_attempt: number
          title: string
          updated_at: string
        }
        Insert: {
          course_id: string
          created_at?: string
          id?: string
          passing_score?: number
          question_bank?: Json
          questions?: Json
          questions_per_attempt?: number
          title?: string
          updated_at?: string
        }
        Update: {
          course_id?: string
          created_at?: string
          id?: string
          passing_score?: number
          question_bank?: Json
          questions?: Json
          questions_per_attempt?: number
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_assessments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: true
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      course_enrollments: {
        Row: {
          course_id: string
          enrolled_at: string
          id: string
          user_id: string
        }
        Insert: {
          course_id: string
          enrolled_at?: string
          id?: string
          user_id: string
        }
        Update: {
          course_id?: string
          enrolled_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_enrollments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      course_lessons: {
        Row: {
          coin_reward: number
          content: string | null
          course_id: string
          created_at: string
          id: string
          image_url: string | null
          order_index: number
          slide_url: string | null
          title: string
          updated_at: string
          video_url: string | null
          xp_reward: number
        }
        Insert: {
          coin_reward?: number
          content?: string | null
          course_id: string
          created_at?: string
          id?: string
          image_url?: string | null
          order_index?: number
          slide_url?: string | null
          title: string
          updated_at?: string
          video_url?: string | null
          xp_reward?: number
        }
        Update: {
          coin_reward?: number
          content?: string | null
          course_id?: string
          created_at?: string
          id?: string
          image_url?: string | null
          order_index?: number
          slide_url?: string | null
          title?: string
          updated_at?: string
          video_url?: string | null
          xp_reward?: number
        }
        Relationships: [
          {
            foreignKeyName: "course_lessons_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          area: string
          author_id: string | null
          cover_url: string | null
          created_at: string
          description: string | null
          edit_complete: boolean
          hours: number
          id: string
          image_url: string | null
          level: string
          published: boolean
          reviewed: boolean
          slide_url: string | null
          title: string
          updated_at: string
        }
        Insert: {
          area?: string
          author_id?: string | null
          cover_url?: string | null
          created_at?: string
          description?: string | null
          edit_complete?: boolean
          hours?: number
          id?: string
          image_url?: string | null
          level?: string
          published?: boolean
          reviewed?: boolean
          slide_url?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          area?: string
          author_id?: string | null
          cover_url?: string | null
          created_at?: string
          description?: string | null
          edit_complete?: boolean
          hours?: number
          id?: string
          image_url?: string | null
          level?: string
          published?: boolean
          reviewed?: boolean
          slide_url?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
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
      game_assignments: {
        Row: {
          assigned_by: string | null
          completed_at: string | null
          created_at: string
          game_key: string
          id: string
          note: string | null
          user_id: string
        }
        Insert: {
          assigned_by?: string | null
          completed_at?: string | null
          created_at?: string
          game_key: string
          id?: string
          note?: string | null
          user_id: string
        }
        Update: {
          assigned_by?: string | null
          completed_at?: string | null
          created_at?: string
          game_key?: string
          id?: string
          note?: string | null
          user_id?: string
        }
        Relationships: []
      }
      game_question_log: {
        Row: {
          answer: string | null
          correct_answer: string | null
          created_at: string
          game: string
          id: string
          is_correct: boolean
          question: string
          user_id: string
        }
        Insert: {
          answer?: string | null
          correct_answer?: string | null
          created_at?: string
          game: string
          id?: string
          is_correct: boolean
          question: string
          user_id: string
        }
        Update: {
          answer?: string | null
          correct_answer?: string | null
          created_at?: string
          game?: string
          id?: string
          is_correct?: boolean
          question?: string
          user_id?: string
        }
        Relationships: []
      }
      game_results: {
        Row: {
          correct: number
          created_at: string
          game_key: string
          id: string
          points: number
          user_id: string
          wrong: number
        }
        Insert: {
          correct?: number
          created_at?: string
          game_key: string
          id?: string
          points?: number
          user_id: string
          wrong?: number
        }
        Update: {
          correct?: number
          created_at?: string
          game_key?: string
          id?: string
          points?: number
          user_id?: string
          wrong?: number
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
      lesson_completions: {
        Row: {
          completed_at: string
          id: string
          lesson_id: string
          user_id: string
        }
        Insert: {
          completed_at?: string
          id?: string
          lesson_id: string
          user_id: string
        }
        Update: {
          completed_at?: string
          id?: string
          lesson_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_completions_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "course_lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_plans: {
        Row: {
          bimestre: string | null
          bncc_codes: string | null
          class_id: string | null
          competencies_codes: string | null
          competencies_text: string | null
          content: string
          contents_topics: string | null
          created_at: string
          curricular_components: string | null
          descriptors_codes: string | null
          descriptors_text: string | null
          discipline: string | null
          grade_year: number | null
          id: string
          lesson_date: string | null
          methodology: string | null
          objective: string | null
          school_id: string | null
          skills_codes: string | null
          skills_text: string | null
          slides_material: string | null
          subject: string | null
          teacher_id: string
          title: string
          updated_at: string
        }
        Insert: {
          bimestre?: string | null
          bncc_codes?: string | null
          class_id?: string | null
          competencies_codes?: string | null
          competencies_text?: string | null
          content: string
          contents_topics?: string | null
          created_at?: string
          curricular_components?: string | null
          descriptors_codes?: string | null
          descriptors_text?: string | null
          discipline?: string | null
          grade_year?: number | null
          id?: string
          lesson_date?: string | null
          methodology?: string | null
          objective?: string | null
          school_id?: string | null
          skills_codes?: string | null
          skills_text?: string | null
          slides_material?: string | null
          subject?: string | null
          teacher_id: string
          title: string
          updated_at?: string
        }
        Update: {
          bimestre?: string | null
          bncc_codes?: string | null
          class_id?: string | null
          competencies_codes?: string | null
          competencies_text?: string | null
          content?: string
          contents_topics?: string | null
          created_at?: string
          curricular_components?: string | null
          descriptors_codes?: string | null
          descriptors_text?: string | null
          discipline?: string | null
          grade_year?: number | null
          id?: string
          lesson_date?: string | null
          methodology?: string | null
          objective?: string | null
          school_id?: string | null
          skills_codes?: string | null
          skills_text?: string | null
          slides_material?: string | null
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
      olympiad_attempts: {
        Row: {
          correct: number
          created_at: string
          exam_id: string
          id: string
          score: number
          total: number
          user_id: string
        }
        Insert: {
          correct: number
          created_at?: string
          exam_id: string
          id?: string
          score: number
          total: number
          user_id: string
        }
        Update: {
          correct?: number
          created_at?: string
          exam_id?: string
          id?: string
          score?: number
          total?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "olympiad_attempts_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "olympiad_exams"
            referencedColumns: ["id"]
          },
        ]
      }
      olympiad_exams: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          olympiad_id: string
          questions: Json
          source: string
          title: string
          year: number | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          olympiad_id: string
          questions?: Json
          source?: string
          title: string
          year?: number | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          olympiad_id?: string
          questions?: Json
          source?: string
          title?: string
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "olympiad_exams_olympiad_id_fkey"
            columns: ["olympiad_id"]
            isOneToOne: false
            referencedRelation: "olympiads"
            referencedColumns: ["id"]
          },
        ]
      }
      olympiads: {
        Row: {
          acronym: string
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          name: string
        }
        Insert: {
          acronym: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          acronym?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      parent_links: {
        Row: {
          created_at: string
          id: string
          parent_id: string
          student_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          parent_id: string
          student_id: string
        }
        Update: {
          created_at?: string
          id?: string
          parent_id?: string
          student_id?: string
        }
        Relationships: []
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
          approved: boolean
          avatar_url: string | null
          birth_date: string | null
          created_at: string
          email: string | null
          full_name: string | null
          guardian_email: string | null
          guardian_name: string | null
          guardian_phone: string | null
          guardian_relationship: string | null
          id: string
          is_olympiad: boolean
          level: number | null
          losses: number | null
          rank_points: number | null
          registration_completed: boolean
          streak: number | null
          updated_at: string
          username: string | null
          wins: number | null
          xp: number | null
        }
        Insert: {
          access_code?: string | null
          approved?: boolean
          avatar_url?: string | null
          birth_date?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          guardian_email?: string | null
          guardian_name?: string | null
          guardian_phone?: string | null
          guardian_relationship?: string | null
          id: string
          is_olympiad?: boolean
          level?: number | null
          losses?: number | null
          rank_points?: number | null
          registration_completed?: boolean
          streak?: number | null
          updated_at?: string
          username?: string | null
          wins?: number | null
          xp?: number | null
        }
        Update: {
          access_code?: string | null
          approved?: boolean
          avatar_url?: string | null
          birth_date?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          guardian_email?: string | null
          guardian_name?: string | null
          guardian_phone?: string | null
          guardian_relationship?: string | null
          id?: string
          is_olympiad?: boolean
          level?: number | null
          losses?: number | null
          rank_points?: number | null
          registration_completed?: boolean
          streak?: number | null
          updated_at?: string
          username?: string | null
          wins?: number | null
          xp?: number | null
        }
        Relationships: []
      }
      question_disciplines: {
        Row: {
          area: Database["public"]["Enums"]["chem_area"]
          color: string
          created_at: string
          key: string
          label: string
          sort: number
          topics: string[]
        }
        Insert: {
          area?: Database["public"]["Enums"]["chem_area"]
          color?: string
          created_at?: string
          key: string
          label: string
          sort?: number
          topics?: string[]
        }
        Update: {
          area?: Database["public"]["Enums"]["chem_area"]
          color?: string
          created_at?: string
          key?: string
          label?: string
          sort?: number
          topics?: string[]
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          can_create: boolean
          can_delete: boolean
          can_edit: boolean
          can_view: boolean
          created_at: string
          feature_key: string
          feature_label: string
          id: string
          is_admin: boolean
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
        }
        Insert: {
          can_create?: boolean
          can_delete?: boolean
          can_edit?: boolean
          can_view?: boolean
          created_at?: string
          feature_key: string
          feature_label: string
          id?: string
          is_admin?: boolean
          role: Database["public"]["Enums"]["app_role"]
          updated_at?: string
        }
        Update: {
          can_create?: boolean
          can_delete?: boolean
          can_edit?: boolean
          can_view?: boolean
          created_at?: string
          feature_key?: string
          feature_label?: string
          id?: string
          is_admin?: boolean
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
      student_lesson_resets: {
        Row: {
          course_id: string
          lesson_id: string
          reset_at: string
          reset_by: string | null
          user_id: string
        }
        Insert: {
          course_id: string
          lesson_id: string
          reset_at?: string
          reset_by?: string | null
          user_id: string
        }
        Update: {
          course_id?: string
          lesson_id?: string
          reset_at?: string
          reset_by?: string | null
          user_id?: string
        }
        Relationships: []
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
      topic_exercise_attempts: {
        Row: {
          answers: Json
          category: string | null
          correct: number
          course_id: string | null
          created_at: string
          id: string
          score: number
          topic_slug: string
          topic_title: string
          total: number
          user_id: string
        }
        Insert: {
          answers?: Json
          category?: string | null
          correct: number
          course_id?: string | null
          created_at?: string
          id?: string
          score: number
          topic_slug: string
          topic_title: string
          total: number
          user_id: string
        }
        Update: {
          answers?: Json
          category?: string | null
          correct?: number
          course_id?: string | null
          created_at?: string
          id?: string
          score?: number
          topic_slug?: string
          topic_title?: string
          total?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "topic_exercise_attempts_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      topic_overrides: {
        Row: {
          bncc_codes: Json
          created_at: string
          curiosities: string[] | null
          custom_fields: Json
          daily_life: string[] | null
          edit_complete: boolean
          examples: Json | null
          exercises: Json | null
          footer_image_url: string | null
          formal: string | null
          formulas: Json | null
          fun_facts: string[] | null
          image_url: string | null
          keys: Json | null
          lesson: string | null
          lesson_plan: string | null
          materials: Json
          pitfalls: Json | null
          principles: Json | null
          progress_reset_at: string | null
          published: boolean
          refs: Json | null
          reviewed: boolean
          section_images: Json
          simple: string | null
          slide_deck: Json | null
          slug: string
          subtopics: Json
          title: string | null
          updated_at: string
          updated_by: string | null
          video_url: string | null
        }
        Insert: {
          bncc_codes?: Json
          created_at?: string
          curiosities?: string[] | null
          custom_fields?: Json
          daily_life?: string[] | null
          edit_complete?: boolean
          examples?: Json | null
          exercises?: Json | null
          footer_image_url?: string | null
          formal?: string | null
          formulas?: Json | null
          fun_facts?: string[] | null
          image_url?: string | null
          keys?: Json | null
          lesson?: string | null
          lesson_plan?: string | null
          materials?: Json
          pitfalls?: Json | null
          principles?: Json | null
          progress_reset_at?: string | null
          published?: boolean
          refs?: Json | null
          reviewed?: boolean
          section_images?: Json
          simple?: string | null
          slide_deck?: Json | null
          slug: string
          subtopics?: Json
          title?: string | null
          updated_at?: string
          updated_by?: string | null
          video_url?: string | null
        }
        Update: {
          bncc_codes?: Json
          created_at?: string
          curiosities?: string[] | null
          custom_fields?: Json
          daily_life?: string[] | null
          edit_complete?: boolean
          examples?: Json | null
          exercises?: Json | null
          footer_image_url?: string | null
          formal?: string | null
          formulas?: Json | null
          fun_facts?: string[] | null
          image_url?: string | null
          keys?: Json | null
          lesson?: string | null
          lesson_plan?: string | null
          materials?: Json
          pitfalls?: Json | null
          principles?: Json | null
          progress_reset_at?: string | null
          published?: boolean
          refs?: Json | null
          reviewed?: boolean
          section_images?: Json
          simple?: string | null
          slide_deck?: Json | null
          slug?: string
          subtopics?: Json
          title?: string | null
          updated_at?: string
          updated_by?: string | null
          video_url?: string | null
        }
        Relationships: []
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
      award_team_coins: {
        Args: { _amount: number; _user_ids: string[] }
        Returns: number
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
      get_my_permissions_full: {
        Args: never
        Returns: {
          can_create: boolean
          can_delete: boolean
          can_edit: boolean
          can_view: boolean
          feature_key: string
          is_admin: boolean
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
      history_by_access_codes: {
        Args: { _codes: string[] }
        Returns: {
          access_code: string
          coins: number
          level: number
          lifetime_coins: number
          username: string
          xp: number
        }[]
      }
      is_staff: { Args: { _uid: string }; Returns: boolean }
      join_class_by_code: { Args: { _code: string }; Returns: string }
      link_child_by_code: { Args: { _code: string }; Returns: string }
      lookup_user_ids_by_emails: {
        Args: { _emails: string[] }
        Returns: {
          email: string
          user_id: string
        }[]
      }
      parent_child_overview: { Args: { _student_id: string }; Returns: Json }
      parent_children: {
        Args: never
        Returns: {
          student_id: string
          username: string
        }[]
      }
      set_olympiad_students: {
        Args: { _off: string[]; _on: string[] }
        Returns: number
      }
      set_user_approved: {
        Args: { _approved: boolean; _user_id: string }
        Returns: undefined
      }
      submit_assessment:
        | { Args: { _answers: Json; _course_id: string }; Returns: Json }
        | {
            Args: { _answers: Json; _course_id: string; _indices?: Json }
            Returns: Json
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
        | "ciencias"
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
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
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
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
        "ciencias",
      ],
      game_mode: ["quiz", "forca", "caca_palavras", "cruzada", "memoria"],
      session_status: ["lobby", "active", "paused", "finished"],
    },
  },
} as const
