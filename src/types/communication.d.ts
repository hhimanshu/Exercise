interface ICommHistory {
  summary: string;
  tags: string[];
  emails: string[];
  phones: string[];
  slack_channels: string[];
  created: { $date: number };
}

export interface ICommunication {
  _id: string;
  incident_id: number;
  tags: string[];
  emails: string[];
  phones: string[];
  slack_channels: string[];
  publish_history: ICommHistory[];
  is_approved: boolean;
  is_published: boolean;
  is_external: boolean;
  is_deleted: boolean;
  created: number;
  updated: number;
  reminded: number;
  summary: string;
}
