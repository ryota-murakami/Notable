export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          id: string
          title: string
          content: Json
          user_id: string
          folder_id: string | null
          is_public: boolean
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: string
          title: string
          content: Json
          user_id: string
          folder_id?: string | null
          is_public?: boolean
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          content?: Json
          user_id?: string
          folder_id?: string | null
          is_public?: boolean
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'notes_folder_id_fkey'
            columns: ['folder_id']
            isOneToOne: false
            referencedRelation: 'folders'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'notes_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      folders: {
        Row: {
          id: string
          name: string
          user_id: string
          parent_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          user_id: string
          parent_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          user_id?: string
          parent_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'folders_parent_id_fkey'
            columns: ['parent_id']
            isOneToOne: false
            referencedRelation: 'folders'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'folders_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      note_tags: {
        Row: {
          id: string
          note_id: string
          tag_id: string
          created_at: string
        }
        Insert: {
          id?: string
          note_id: string
          tag_id: string
          created_at?: string
        }
        Update: {
          id?: string
          note_id?: string
          tag_id?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'note_tags_note_id_fkey'
            columns: ['note_id']
            isOneToOne: false
            referencedRelation: 'notes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'note_tags_tag_id_fkey'
            columns: ['tag_id']
            isOneToOne: false
            referencedRelation: 'tags'
            referencedColumns: ['id']
          },
        ]
      }
      tags: {
        Row: {
          id: string
          name: string
          color: string
          user_id: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          color?: string
          user_id: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          color?: string
          user_id?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'tags_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      users: {
        Row: {
          id: string
          email: string
          name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      monitoring_alerts: {
        Row: {
          id: string
          fingerprint: string
          status: 'firing' | 'resolved'
          severity: string
          service: string
          alert_name: string
          summary: string
          description: string | null
          labels: Json | null
          annotations: Json | null
          starts_at: string
          ends_at: string | null
          generator_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          fingerprint: string
          status: 'firing' | 'resolved'
          severity: string
          service: string
          alert_name: string
          summary: string
          description?: string | null
          labels?: Json | null
          annotations?: Json | null
          starts_at: string
          ends_at?: string | null
          generator_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          fingerprint?: string
          status?: 'firing' | 'resolved'
          severity?: string
          service?: string
          alert_name?: string
          summary?: string
          description?: string | null
          labels?: Json | null
          annotations?: Json | null
          starts_at?: string
          ends_at?: string | null
          generator_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      service_status: {
        Row: {
          id: string
          service_name: string
          status: 'operational' | 'degraded' | 'outage'
          description: string | null
          last_checked: string
          response_time: number | null
          uptime_percentage: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          service_name: string
          status: 'operational' | 'degraded' | 'outage'
          description?: string | null
          last_checked?: string
          response_time?: number | null
          uptime_percentage?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          service_name?: string
          status?: 'operational' | 'degraded' | 'outage'
          description?: string | null
          last_checked?: string
          response_time?: number | null
          uptime_percentage?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      uptime_records: {
        Row: {
          id: string
          service_name: string
          timestamp: string
          is_up: boolean
          response_time: number | null
          error_message: string | null
          metadata: Json | null
        }
        Insert: {
          id?: string
          service_name: string
          timestamp?: string
          is_up: boolean
          response_time?: number | null
          error_message?: string | null
          metadata?: Json | null
        }
        Update: {
          id?: string
          service_name?: string
          timestamp?: string
          is_up?: boolean
          response_time?: number | null
          error_message?: string | null
          metadata?: Json | null
        }
        Relationships: []
      }
      metrics_snapshots: {
        Row: {
          id: string
          timestamp: string
          metric_name: string
          metric_value: number
          labels: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          timestamp?: string
          metric_name: string
          metric_value: number
          labels?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          timestamp?: string
          metric_name?: string
          metric_value?: number
          labels?: Json | null
          created_at?: string
        }
        Relationships: []
      }
      incidents: {
        Row: {
          id: string
          title: string
          description: string | null
          severity: 'minor' | 'major' | 'critical'
          status: 'investigating' | 'identified' | 'monitoring' | 'resolved'
          affected_services: string[] | null
          started_at: string
          resolved_at: string | null
          created_by: string | null
          resolved_by: string | null
          public_message: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          severity: 'minor' | 'major' | 'critical'
          status?: 'investigating' | 'identified' | 'monitoring' | 'resolved'
          affected_services?: string[] | null
          started_at?: string
          resolved_at?: string | null
          created_by?: string | null
          resolved_by?: string | null
          public_message?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          severity?: 'minor' | 'major' | 'critical'
          status?: 'investigating' | 'identified' | 'monitoring' | 'resolved'
          affected_services?: string[] | null
          started_at?: string
          resolved_at?: string | null
          created_by?: string | null
          resolved_by?: string | null
          public_message?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      incident_updates: {
        Row: {
          id: string
          incident_id: string
          message: string
          status: 'investigating' | 'identified' | 'monitoring' | 'resolved'
          created_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          incident_id: string
          message: string
          status: 'investigating' | 'identified' | 'monitoring' | 'resolved'
          created_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          incident_id?: string
          message?: string
          status?: 'investigating' | 'identified' | 'monitoring' | 'resolved'
          created_by?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'incident_updates_incident_id_fkey'
            columns: ['incident_id']
            isOneToOne: false
            referencedRelation: 'incidents'
            referencedColumns: ['id']
          },
        ]
      }
      user_2fa_settings: {
        Row: {
          user_id: string
          totp_enabled: boolean
          totp_secret: string | null
          recovery_phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          totp_enabled?: boolean
          totp_secret?: string | null
          recovery_phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          user_id?: string
          totp_enabled?: boolean
          totp_secret?: string | null
          recovery_phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_2fa_settings_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      user_2fa_backup_codes: {
        Row: {
          id: string
          user_id: string
          code_hash: string
          used: boolean
          created_at: string
          used_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          code_hash: string
          used?: boolean
          created_at?: string
          used_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          code_hash?: string
          used?: boolean
          created_at?: string
          used_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'user_2fa_backup_codes_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      user_2fa_verification_logs: {
        Row: {
          id: string
          user_id: string
          method: string
          success: boolean
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          method: string
          success: boolean
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          method?: string
          success?: boolean
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_2fa_verification_logs_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
