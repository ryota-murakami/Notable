import Link from 'next/link'
import { Button } from '@/design-system/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/design-system/components/card'
import { AlertTriangle } from 'lucide-react'

export default function AuthCodeError() {
  return (
    <div className='flex h-screen bg-background items-center justify-center'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1'>
          <div className='flex items-center justify-center mb-4'>
            <AlertTriangle className='h-16 w-16 text-red-500' />
          </div>
          <CardTitle className='text-2xl font-bold text-center'>
            Authentication Error
          </CardTitle>
          <CardDescription className='text-center'>
            There was a problem with the authentication process
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-muted-foreground text-center'>
            Sorry, we couldn't sign you in. This could be due to:
          </p>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• The authentication link has expired</li>
            <li>• The link has already been used</li>
            <li>• There was a temporary server error</li>
          </ul>
          <div className='space-y-2'>
            <Link href='/auth' className='w-full'>
              <Button className='w-full'>Try Again</Button>
            </Link>
            <Link href='/' className='w-full'>
              <Button variant='secondary' className='w-full'>
                Go Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
