import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './contact.module.css';
import { useForm, ValidationError } from '@formspree/react';

export const meta = () => {
  return baseMeta({
    title: 'Contacto',
    description:
      'Envíame un mensaje si estás interesado en discutir un proyecto o si simplemente quieres saludarme.',
  });
};

export const Contact = () => {

  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;

  // ✅ Hook de Formspree 
  const [state, handleSubmit] = useForm("mkgqzaeb");

  const sending = state.submitting;
  const success = state.succeeded;
  const errors = state.errors;

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!success} timeout={1600}>
        {({ status, nodeRef }) => (
          <form
            onSubmit={handleSubmit}
            className={styles.form}
            ref={nodeRef}
          >
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="¡Dí Hola!" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />

            {/* Hidden honeypot (opcional) */}
            <Input
              className={styles.botkiller}
              label="Name"
              name="name"
              maxLength={512}
            />

            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Tu email"
              type="email"
              name="email"
              maxLength={512}
              {...email}
            />
            <ValidationError prefix="Email" field="email" errors={errors} />

            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Mensaje"
              name="message"
              maxLength={4096}
              {...message}
            />
            <ValidationError prefix="Mensaje" field="message" errors={errors} />

            {errors && (
              <Transition
                unmount
                in={Object.keys(errors).length > 0}
                timeout={msToNum(tokens.base.durationM)}
              >
                {({ status: errorStatus, nodeRef }) => (
                  <div
                    className={styles.formError}
                    ref={nodeRef}
                    data-status={errorStatus}
                    style={cssProps({
                      height: errorStatus ? errorRef.current?.offsetHeight : 0,
                    })}
                  >
                    <div className={styles.formErrorContent} ref={errorRef}>
                      <div className={styles.formErrorMessage}>
                        <Icon className={styles.formErrorIcon} icon="error" />
                        Hay un problema con los datos del formulario.
                      </div>
                    </div>
                  </div>
                )}
              </Transition>
            )}

            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Enviando..."
              icon="send"
              type="submit"
            >
              Enviar mensaje
            </Button>
          </form>
        )}
      </Transition>

      {/* ✅ Mensaje de éxito (mantiene tu estilo original) */}
      <Transition unmount in={success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Mensaje enviado
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              Me pondré en contacto contigo en un par de días, quédate tranquilo/a.
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Volver a la página de inicio
            </Button>
          </div>
        )}
      </Transition>

      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
