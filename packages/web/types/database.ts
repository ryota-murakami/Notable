export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          id: string
          title: string
          content: string
          user_id: string
          folder_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          user_id: string
          folder_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          user_id?: string
          folder_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      user_subscriptions: {
        Row: {
          id: string
          user_id: string
          subscription_id: string | null
          customer_id: string | null
          plan: string
          status: string
          current_period_start: string | null
          current_period_end: string | null
          trial_end: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          subscription_id?: string | null
          customer_id?: string | null
          plan?: string
          status?: string
          current_period_start?: string | null
          current_period_end?: string | null
          trial_end?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          subscription_id?: string | null
          customer_id?: string | null
          plan?: string
          status?: string
          current_period_start?: string | null
          current_period_end?: string | null
          trial_end?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      subscription_usage: {
        Row: {
          id: string
          user_id: string
          notes_count: number
          storage_used: number
          devices_count: number
          exports_count: number
          collaborators_count: number
          ai_requests_count: number
          team_members_count: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          notes_count?: number
          storage_used?: number
          devices_count?: number
          exports_count?: number
          collaborators_count?: number
          ai_requests_count?: number
          team_members_count?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          notes_count?: number
          storage_used?: number
          devices_count?: number
          exports_count?: number
          collaborators_count?: number
          ai_requests_count?: number
          team_members_count?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      stripe_checkout_sessions: {
        Row: {
          id: string
          session_id: string
          user_id: string
          customer_id: string
          price_id: string
          status: string
          completed_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          session_id: string
          user_id: string
          customer_id: string
          price_id: string
          status?: string
          completed_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          session_id?: string
          user_id?: string
          customer_id?: string
          price_id?: string
          status?: string
          completed_at?: string | null
          created_at?: string
        }
      }
    }
    Views: {}
    Functions: {
      increment_usage: {
        Args: {
          p_user_id: string
          p_action: string
          p_increment: number
        }
        Returns: void
      }
    }
    Enums: {}
  }
}
